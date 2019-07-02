<template>
  <div class='choiceness'>
    <p>
      <span>精选专题</span>
      <span class='fa fa-power-off'></span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'choiceness'
}
</script>
<style lang='scss'>
.choiceness {
  background: #fff;
  margin: .25rem 0;
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
}
</style>


