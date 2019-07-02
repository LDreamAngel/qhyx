<template>
  <div class="home">
    <banner></banner>
    <template1></template1>
    <bargain></bargain>
    <choiceness></choiceness>
    <recommend></recommend>
  </div>
</template>
<script>
import bargain from './bargain'
import banner from './banner'
import template1 from "./template"
import choiceness from './choiceness'
import recommend from './recommend'
export default {
  name:'Home',
  components:{bargain,banner,template1,choiceness,recommend}
    
}
</script>
<style scoped lang='scss'>
.home{
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: auto;
  background: #f5f5f5;
}
</style>


