<template>
  <ul class="foot">
    <router-link v-for="i in tabs" :key="i.className" :to="i.path" tag="li">
      <i class="fa" :class="i.className"></i>
      <p>{{i.name}}</p>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: "Foot",
 data() {
   return {
     tabs:[{
       name:'首页',
       className:'fa-home',
       path:'/home'
     },{
       name:'分类',
       className:'fa-print',
       path:'/sort'
     },{
       name:'购物车',
       className:'fa-calendar',
       path:'/cart'
     },{
       name:'个人',
       className:'fa-user',
       path:'/personal'
     }]
   }
 }
};
</script>
<style lang='scss'>
.foot {
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  border: 1px solid;
  li {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    color: #9d9d9d;
    font-size: 0.3rem;

    i {
      font-size: 0.65rem;
    }
  }
  .router-link-active {
    color: #a82222;
  }
}
</style>


