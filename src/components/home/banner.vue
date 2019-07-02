<template>
  <div class="banner">
    <mt-swipe :auto="4000" id="banner1">
      <mt-swipe-item v-for="(item,index) in list" :key="index">
        <img :src="item.picUrl" />
      </mt-swipe-item>
    </mt-swipe>

    <ul class="nav">
      <li v-for="i in navs" :key="i.name">
        <i class="fa fa-heart"></i>
        <p>{{i.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Banner from "../../services/banner";
import { Swipe, SwipeItem } from "mint-ui";

const _banner = new Banner();
export default {
  name: "Banner",
  components: { "mt-swipe": Swipe, "mt-swipe-item": SwipeItem },
  data() {
    return {
      list: [],
      navs: [
        { name: "签到", icons: "fa-heart" },
        { name: "礼券", icons: "fa-heart" },
        { name: "砍价", icons: "fa-heart" },
        { name: "专栏", icons: "fa-heart" }
      ]
    };
  },
  created() {
    _banner.list().then(res => {
      // console.log(res.data.data);
      this.list = res.data.data;
    });
  }
};
</script>

<style lang='scss'>
.banner {
  width: 100%;
  height: 12.8rem;
  position: relative;
}
#banner1 {
  width: 100%;
  height: 10.5rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.nav {
  width: 100%;
  height: 2.7rem;
  background: #fff;
  //background: red;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  position: absolute;
  top: 10.1rem;
  z-index: 5;
  display: flex;
  align-items: center;
  color: #b4b4b4;
  li {
    flex: 1;
    text-align: center;
    i {
      font-size: 0.85rem;
    }
    p {
      font-size: 0.35rem;
    }
  }
}
</style>


