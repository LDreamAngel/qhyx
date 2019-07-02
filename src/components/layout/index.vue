<template>
  <div class="view">
    <div class="content">
      <router-view></router-view>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import foot from "./foot";
export default {
  name: "Layout",
  components: { foot },
  data() {
    return {};
  }
  //   watch: {
  //       '$route' (to, from) { //监听路由是否变化
  //         let path=to.path;
  //         if(path==='/home' || path==='/cart' || path==='/sort' || path==='/personal'){
  //           this.flag=true;
  //         }else{
  //            this.flag=false;
  //         }
  //       }
  //     },
};
</script>

<style lang='scss'>
.view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    width: 100%;
    flex: 1;
    overflow: auto;
  }
}
</style>
