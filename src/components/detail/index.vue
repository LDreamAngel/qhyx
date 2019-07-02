<template>
  <div class="detail-box">
    <div class="detail" v-if="list">
      <mt-swipe :auto="4000" id="banner1">
        <mt-swipe-item v-for="(item,index) in list.pics" :key="index">
          <img :src="item.pic" />
        </mt-swipe-item>
      </mt-swipe>

      <div>
        <p class="p1">{{basicInfo.name}}</p>
        <p class="p2">{{basicInfo.characteristic}}</p>
        <ul class="p3">
          <li>
            <span v-if="list.kanjia" class="s1">底价</span>
            <span class="s2">¥{{basicInfo.kanjiaPrice}}</span>
            <span v-if="list.kanjia" class="s3">原价</span>
            <span class="s4">¥{{basicInfo.originalPrice}}</span>
          </li>
          <li>
            <span v-if="list.kanjia" class="s4">库存</span>
            <span class="s5">已售</span>
            <span class="s6">{{basicInfo.stores}}</span>
          </li>
        </ul>
      </div>

      <div class="properties">
        <span>选择规格：选择版本</span>
        <span>></span>
      </div>

      <div>
        <mt-navbar v-model="selected">
          <mt-tab-item id="appraise">商品介绍</mt-tab-item>
          <mt-tab-item id="introduce">商品评价</mt-tab-item>
        </mt-navbar>
        <appraise v-show="selected=='appraise'" />
        <!-- <introduce v-show="selected=='introduce'" /> -->
        <div v-show="selected=='introduce'" v-html="this.content" class="introduce">
        </div>
      </div>
    </div>
    <ul class="footer">
      <li class="iconfont">&#xe872;</li>
      <li class="iconfont">&#xf0179;</li>
      <li class="iconfont">&#xe6a2;</li>
      <li>立即购买</li>
      <li @click="addCart()">加入购物车</li>
    </ul>
    <addCart :pro="list"></addCart>
    <!-- 返回 -->
    <!-- <router-link class="back" tag="div" to="/">&lt;</router-link> -->
  </div>
</template>
<script>
import Detail from "../../services/detail";
import appraise from "./appraise";
import introduce from "./introduce";
import addCart from "./addCart";
import { Swipe, SwipeItem, Navbar, TabItem, Toast } from "mint-ui";

const _detail = new Detail();
export default {
  name: "Detail",
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem,
    "mt-navbar": Navbar,
    "mt-tab-item": TabItem,
    appraise,
    introduce,
    addCart,
    Toast
  },
  data() {
    return {
      selected: "appraise",
      list: {},
      basicInfo: {}, //嵌套层级不能太深，否则会找不到最底层的属性
      content:''
    };
  },
  created() {
    let id = this.$route.query.id;
    _detail.list(id).then(res => {
      let { data, code, msg } = res.data;
      //当请求成功的情况下再赋值，反之则抛出错误
      if (code === 0) {
        this.list = data;
        this.basicInfo = data.basicInfo;
        this.content = data.content;
      } else {
        Toast(msg);
      }
    });
  },
  methods: {
    //加入购物车
    addCart() {
      //显示
      this.$store.commit("show");
      this.$store.commit("add", this.list);
    }
  }
};
</script>

<style lang='scss' scoped>
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 1px solid #922727;
  color: #922727;
}

.detail-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  //脚
  .footer {
    width: 100%;
    height: 1.3rem /* 130/100 */;
    //background: red;
    background: #fff;
    display: flex;
    align-items: center;
    font-size: 0.5rem /* 40/100 */;
    li {
      //padding: 0 .3rem /* 40/100 */;
      height: 100%;
      line-height: 1.3rem /* 130/100 */;
      text-align: center;
      flex: 2;
    }
    li:last-child {
      background: red;
      color: #fff;
    }
    .iconfont {
      font-size: 0.8rem /* 80/100 */;
      color: darkgray;
      border-right: 1px solid lightgray;
      flex: 1;
    }
  }
}
.detail {
  width: 100%;
  flex: 1;
  overflow: auto;
  background: #f5f5f5;
  #banner1 {
    width: 100%;
    height: 10rem /* 1000/100 */;
    img {
      width: 100%;
      height: 100%;
    }
  }
  #banner1 + div {
    padding: 0.2rem /* 20/100 */ 0.4rem /* 20/100 */;
    background: #fff;
  }
  .p1 {
    font-size: 0.45rem /* 45/100 */;
    line-height: 0.6rem /* 60/100 */;
  }
  .p2 {
    font-size: 0.3rem /* 30/100 */;
    line-height: 0.6rem /* 60/100 */;
    color: darkgray;
  }
  .p3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.4rem /* 50/100 */;
    color: darkgray;
    .s2 {
      font-size: 0.5rem /* 50/100 */;
      color: red;
    }
    .s4 {
      margin-left: 0.5rem /* 50/100 */;
    }
  }
   //商品介绍
  .introduce {
    border: solid 1px green;
    width: 100%;
    background: #fff;
    font-size: 0.4rem /* 40/100 */;
    .img-lazyload {
      width: 100% !important;
    }
    ul,
    li {
      width: 100%;
      line-height: 0.5rem!important;
      border: 1px solid;
    }
    p {
      // width: 100%;
       width: 100vw!important;
      img{
        // width: 100%!important;
        width: 100vw!important;
      }
    }
  }
}
//选择规格
.properties {
  margin: 0.2rem /* 20/100 */ auto;
  background: #fff;
  height: 1rem /* 60/100 */;
  line-height: 1rem /* 60/100 */;
  font-size: 0.4rem /* 40/100 */;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem /* 30/100 */;
}
.detail-ping {
  display: flex;
  background: #fff;
  li {
    flex: 1;
    text-align: center;
    height: 0.9rem /* 60/100 */;
    line-height: 0.9rem /* 60/100 */;
    color: darkgray;
    font-size: 0.4rem /* 40/100 */;
  }
  .router-link-active {
    border-bottom: 1px solid red;
    color: red;
  }
 
}
</style>

