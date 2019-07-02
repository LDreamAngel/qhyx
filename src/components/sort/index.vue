<template>
  <div class="sort">
    <div class="search">
      <input type="text" placeholder="搜索商品" />
    </div>
    <div class="sort-con">
      <ul class="sort-con-left">
        <li
          v-for="i in menus"
          :key="i.type"
          @click="changeType(i.type)"
          :class="i.type==currentMenu?'red':''"
        >{{i.name}}</li>
      </ul>
      <div class="content-right">
        <div class="sort-con-right">
          <mt-swipe :auto="4000" class="sort-swiper">
            <mt-swipe-item>
              <img src="../../assets/img/1.png" alt />
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../../assets/img/2.png" alt />
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../../assets/img/3.png" alt />
            </mt-swipe-item>
          </mt-swipe>
          <ul>
            <li v-for="i in getType(list)" :key="i.id" class="item">
              <img :src="i.icon" alt />
              <p>{{i.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sort from "../../services/sort";
import { Swipe, SwipeItem } from "mint-ui";

const _sort = new Sort();
export default {
  name: "Sort",
  components: { "mt-swipe": Swipe, "mt-swipe-item": SwipeItem },
  data() {
    return {
      menus: [
        {
          name: "所有分类",
          type: "all"
        },
        {
          name: "居家生活",
          type: "jujia2"
        },
        {
          name: "配件装饰",
          type: "peishi"
        },
        {
          name: "新品服饰",
          type: "fuzhuang2"
        }
      ],
      currentMenu: "all",
      list: [] //获取回来的所有商品
    };
  },
  created() {
    this.getAllGoods();
  },
  methods: {
    getAllGoods() {
      _sort.list().then(res => {
        this.list = res.data.data;
      });
    },
    //获取当前所在菜单
    changeType(str) {
      this.currentMenu = str;
    },
    getType(list) {
      let arr = [];
      list.forEach(el => {
        if (el.type === this.currentMenu) {
          arr.push(el);
        }
      });
      //console.log(arr);
      return arr.length === 0 ? list : arr;
    }
  }
};
</script>
<style scoped lang='scss'>
.red {
  color: #a82222;
}
.sort {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .search {
    height: 1.25rem;
    padding: 0.08rem 0;
    border-bottom: 1px solid #f3f3f3;
    input {
      padding-left: 0.2rem;
      background: #f5f5f5;
      border-radius: 0.3rem;
      width: 7rem;
      height: 0.8rem;
      border: none;
      outline: none;
      color: #797979;
      margin-left: 0.35rem;
      vertical-align: middle;
    }
  }

  .sort-con {
    width: 100%;
    display: flex;
    flex: 1;
    .sort-con-left {
      width: 2.7rem;
      padding-top: 0.6rem;
      text-align: center;
      font-size: 0.4rem;
      border-right: 1px solid #f3f3f3;
      > li {
        height: 1rem;
        line-height: 1rem;
      }
    }
    .content-right {
      width: 8rem;
      height: 100%;
      overflow: auto;
      .sort-con-right {
        .sort-swiper {
          width: 100%;
          height: 3rem /* 200/100 */;
          img {
            width: 100%;
            height: 100%;
          }
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          overflow: auto;
        }
        li {
          width: 33%;
          height: 3rem /* 200/100 */;
          text-align: center;
          font-size: 0.35rem /* 35/100 */;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          // border: 1px solid;
          p:nth-of-type(1) {
            width: 100%;
            height: 1.6rem /* 190/100 */;
            margin-top: 0.55rem /* 55/100 */;
          }
          img {
            width: 1.45rem /* 145/100 */;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>
