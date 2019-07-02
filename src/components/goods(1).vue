<template>
  <div class="list">
    <ul class="menu">
      <li v-for="i in menus" :key="i.type" @click="changeType(i.type)">{{i.name}}</li>
    </ul>
    <div class="goods">
      <p>商品展示区</p>
      <div v-for="i in getType(list)" :key="i.id" class="item">
        <img :src="i.icon" alt>
        <p>{{i.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swipe, SwipeItem } from 'mint-ui'

export default {
  name: "Goods",
  data() {
    return {
      menus: [
        {
          name: "所有分类",
          type: "all"
        },
        {
          name: "居家生活",
          type: "jujia"
        },
        {
          name: "配件装饰",
          type: "peijian"
        },
        {
          name: "新品服饰",
          type: "fushi"
        }
      ],
      currentMenu: "all",//当前所在的菜单
      list: [
        {
          dateAdd: "2018-06-01 18:59:55",
          icon:
            "https://cdn.it120.cc/apifactory/2018/06/01/0e5e55aaa9179ac54a629832efb2e97a.jpg",
          id: 15114,
          isUse: true,
          key: "0",
          level: 1,
          name: "居家",
          paixu: 0,
          pid: 0,
          type: "jujia",
          userId: 6938
        },
        {
          dateAdd: "2018-11-07 08:57:40",
          icon:
            "https://cdn.it120.cc/apifactory/2018/11/07/4dafc90ab96af8c7f7ceeb2896f2212a.png",
          id: 24582,
          isUse: true,
          key: "1",
          level: 2,
          name: "家饰",
          paixu: 0,
          pid: 15114,
          type: "peijian",
          userId: 6938
        },
        {
          dateAdd: "2018-11-07 08:59:44",
          icon:
            "https://cdn.it120.cc/apifactory/2018/11/07/404c8206706344a557fea0353a654c83.png",
          id: 24583,
          isUse: true,
          key: "1",
          level: 2,
          name: "旅行用品",
          paixu: 0,
          pid: 15114,
          type: "fushi",
          userId: 6938
        },
        {
          dateAdd: "2018-11-07 09:00:27",
          icon:
            "https://cdn.it120.cc/apifactory/2018/11/07/469cd4b31a8ee89d5982e50feaad7207.png",
          id: 24584,
          isUse: true,
          key: "1",
          level: 2,
          name: "收纳",
          paixu: 0,
          pid: 15114,
          type: "fushi",
          userId: 6938
        }
      ] //获取回来的所有商品
    };
  },
  // filters: {
  //   getType(list) {
  //     let arr = [];
  //     list.forEach(el => {
  //       if (el.type === this.currentMenu) {
  //         arr.push(el);
  //       }
  //     });
  //     return arr.length===0?list:arr;
  //   }
  // },
  methods: {
    //获去所有商品方法
    // getAllGoods() {
    //   this.list = [];
    // },
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
      return arr.length===0?list:arr;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.list {
  display: flex;
}
.menu {
  width: 25%;
  height: auto;
  list-style: none;
}
.menu li {
  width: 100%;
  height: 40px;
  line-height: 35px;
  list-style: none;
  background-color: #e7e5e5;
  margin-bottom: 1px;
  color: #912222;
}
.goods {
  width: 75%;
  height: auto;
  border: solid 1px green;
}
.item{
  width: 150px;
  height: 150px;
}
.item img{
  width: 100px;
  height: 100px;
}
</style>
