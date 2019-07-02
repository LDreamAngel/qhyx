<template>
  <div class="cart">
    <!-- 头 -->
    <header>购物车</header>

    <div class="cart-con">
      <!-- 购物车空时显示 -->
      <div v-if="!cart" class="no-cart">
        <i class="iconfont icon-gouwuchekong"></i>
        <p>去添加点什么吧</p>
      </div>
      <!-- 购物车数据 -->
      <ul class="cart-data">
        <li v-for="item in cart" :key="item.id">
          <!-- <mt-checklist
            title="复选框列表"
            v-model="value"
            :options="[item.price]">
          </mt-checklist>-->
          <div>
            <input type="checkbox" />
          </div>
          <div class="cart-data-img">
            <img :src="item.img" alt />
          </div>
          <div class="cart-data-con">
            <p>{{item.name}}</p>
            <p v-if="item.type" class="cart-data-con-type">{{item.type}}</p>
            <p class="cart-data-con-pay">
              <span>{{item.price}}</span>
              <button>-</button>
              <button>{{item.num}}</button>
              <button>+</button>
            </p>
          </div>
        </li>
      </ul>
      <!-- 猜你喜欢 -->
      <div class="like">
        <p>猜你喜欢</p>
        <ul>
          <li v-for="(val,i) in list" :key="i">
            <img :src="val.pic" alt />
            <p>{{val.name}}</p>
            <p>
              <span class="cart-pay">¥{{val.originalPrice}}</span>
              <span>已售{{val.numberSells}}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Home from "../../services/home";
import { Checklist } from "mint-ui";

const _home = new Home();
export default {
  name: "cart",
  components: { "mt-checklist": Checklist },
  data() {
    return {
      list: []
    };
  },
  created() {
    _home.recommend().then(res => {
      res.data.data.forEach(val => {
        if (val.recommendStatusStr == "推荐") {
          this.list.push(val);
        }
      });
    });
  },
  computed: {
    cart() {
      console.log(this.$store.state.cart);
      return this.$store.state.cart;
    }
  }
};
</script>
<style scoped lang='scss'>
.cart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //头部的
  header {
    width: 100%;
    height: 1.3rem /* 130/100 */;
    text-align: center;
    line-height: 1.3rem /* 130/100 */;
    //border: 1px solid ;
    font-size: 0.45rem /* 40/100 */;
  }
  //身体
  .cart-con {
    flex: 1;
    overflow: auto;
    //空购物车
    .no-cart {
      width: 100%;
      height: 5.5rem /* 300/100 */;
      background: #f5f5f5;
      color: #a4a4a4;
      font-size: 0.4rem /* 40/100 */;
      display: flex;
      flex-direction: column;
      //padding-top:1rem /* 100/100 */ ;
      justify-content: center;
      align-items: center;
      i {
        font-size: 2.5rem /* 60/100 */;
      }
    }
    //购物车
    .cart-data {
      width: 100%;
      margin-bottom: 0.4rem /* 40/100 */;
      li {
        display: flex;
        padding: 0.3rem /* 30/100 */;
        //图片
        .cart-data-img {
          width: 3rem /* 300/100 */;
          height: 3rem /* 300/100 */;
          img {
            width: 100%;
            height: 100%;
          }
        }
        //商品详情
        .cart-data-con {
          p:nth-of-type(1) {
            font-size: 0.4rem /* 40/100 */;
          }
          .cart-data-con-type {
            font-size: 0.35rem /* 40/100 */;
            color: darkgray;
          }
          .cart-data-con-pay {
            span {
              color: red;
            }
            button {
              width: 0.7rem /* 40/100 */;
              height: 0.4rem /* 40/100 */;
              font-size: 0.4rem /* 40/100 */;
              border: none;
              background: none;
              border: 1px solid lightgrey;
            }
          }
        }
      }
    }
    //猜你喜欢
    .like {
      background: #fff;
      > p {
        width: 100%;
        height: 1.65rem /* 165/100 */;
        line-height: 1.65rem /* 165/100 */;
        text-align: center;
        font-size: 0.4rem /* 40/100 */;
      }
      > ul {
        width: 100%;
        padding: 0 0.4rem /* 40/100 */;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 48%;
          margin-bottom: 0.3rem /* 20/100 */;
          img {
            width: 100%;
          }
          p:nth-of-type(1) {
            font-size: 0.4rem /* 40/100 */;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p:nth-of-type(2) {
            font-size: 0.4rem /* 40/100 */;
            display: flex;
            justify-content: space-between;
          }
          .cart-pay {
            color: red;
          }
          span:nth-of-type(2) {
            color: dimgray;
          }
        }
      }
    }
  }
}
</style>

