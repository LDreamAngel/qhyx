<template>
  <div class="recommend">
    <p>
      <span>人气推荐</span>
      <span class="fa fa-power-off"></span>
    </p>
    <ul>
      <router-link
        :to="{path:'detail',query:{id:item.id}}"
        v-for="item in list"
        :key="item.id"
        tag="li"
      >
        <img :src="item.pic" alt />
        <p>{{item.name}}</p>
        <p>{{item.characteristic}}</p>
        <p>￥{{item.originalPrice}}</p>
      </router-link>
    </ul>
  </div>
</template>
<script>
import Home from "../../services/home";

const _home = new Home();
export default {
  name: "recommend",
  data() {
    return {
      list: []
    };
  },
  created() {
    _home.recommend().then(res => {
      //console.log(res.data.data);
      res.data.data.forEach(val => {
        if (val.recommendStatusStr == "推荐") {
          this.list.push(val);
        }
      });
      //console.log(this.list)
    });
  }
};
</script>
<style lang='scss'>
.recommend {
  background: #fff;
  > p {
    height: 1.3rem;
    line-height: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    span:nth-of-type(1) {
      font-size: 0.45rem;
    }
    span:nth-of-type(2) {
      font-size: 0.5rem;
      color: #919191;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 0.35rem;
    li {
      width: 4.85rem;
      padding-bottom: 0.65rem;
      > p {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      img {
        width: 100%;
      }
      p:nth-of-type(1) {
        font-size: 0.4rem;
        line-height: 0.65rem;
      }
      p:nth-of-type(2) {
        font-size: 0.3rem;
        line-height: 0.5rem;
        color: #a0a0a0;
      }
      p:nth-of-type(3) {
        font-size: 0.4rem;
        color: red;
        line-height: 0.6rem;
      }
    }
  }
}
</style>


