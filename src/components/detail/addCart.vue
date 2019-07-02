<template>
  <div class="addCart"
       v-if='show'>
    <div class="top"></div>
    <!-- 购物车 -->
    <div class="c1">
      <img :src="goods.basicInfo.pic"
           alt="">
      <div>
        <p>{{goods.basicInfo.name}}</p>
        <p>¥{{goods.basicInfo.originalPrice}}</p>
      </div>
      <span @click='hide'>x</span>
    </div>
    <!-- 选择版本 -->
    <ul class="c2"
        v-if='goods.properties'>
      <li>选择版本</li>
      <li>
        <p v-for='item in (goods.properties[0].childsCurGoods)'>
          <input type="radio"
                 name='size'
                 :id='item.name'>
          <label :for="item.name"
                 @click='ss(item)'>{{item.name}}</label>
        </p>

      </li>
    </ul>
    <!-- 购买详情 -->
    <div class="c3">
      <p>购买数量</p>
      <p>
        <button @click='subNum()'>-</button>
        <button>{{num}}</button>
        <button @click='addNum()'>+</button>
      </p>
    </div>
    <!-- 加入购物车 -->
    <div class="c4"
         @click='addCart'>加入购物车</div>
  </div>
</template>
<script>

export default {
  name: 'addCart',
  data () {
    return {
      list: '',
      type: '',
      num: 1
    }
  },

  methods: {
    //隐藏
    hide () {
      this.$store.commit("hide")
    },
    //减
    subNum () {
      this.$store.commit("subNum", this.type.id);
      return this.num--;
    },
    //加
    addNum () {
      this.$store.commit("addNum", this.type.id);
      return this.num++;
    },
    //加入购物车
    addCart () {
      let obj = {
        name: this.goods.basicInfo.name,
        price: this.goods.basicInfo.originalPrice,
        num: this.num,
        id: this.goods.basicInfo.id,
        img:this.goods.basicInfo.pic
      }
      if (this.type) {
        obj.type = this.type.name,
          obj.id = this.type.id
      }
      this.$store.commit('add1', obj);
      this.$store.commit('hide');
      alert('加入购物车成功')
    },
    ss (type) {
      this.type = type;
    }

  },
  computed: {
    show () {
      return this.$store.state.isShow;
    },
    goods () {
      return this.$store.state.goods;
    }
  }
}
</script>
<style lang='scss' scoped>
.addCart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //background: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  //上面的遮罩
  .top {
    flex: 1;
    background: rgba($color: #000000, $alpha: 0.4);
  }
  //购物车
  .c1 {
    width: 100%;
    background: #fff;
    display: flex;
    padding: 0.3rem /* 30/100 */;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    z-index: 9;
    img {
      width: 2rem /* 200/100 */;
      height: 2rem /* 200/100 */;
    }
    > div {
      font-size: 0.4rem /* 40/100 */;
      width: 7rem /* 500/100 */;
      //border: 1px solid;
      p {
        line-height: 0.6rem /* 60/100 */;
      }

      p:nth-of-type(2) {
        color: red;
      }
    }
    > span {
      display: inline-block;
      width: 0.7rem /* 40/100 */;
      height: 0.7rem /* 40/100 */;
      border-radius: 50%;
      border: 1px solid darkgray;
      color: darkgray;
      text-align: center;
      line-height: 0.7rem /* 40/100 */;
      font-size: 0.5rem /* 30/100 */;
    }
  }
  //选择版本
  .c2 {
    font-size: 0.4rem /* 40/100 */;
    padding: 0.3rem /* 30/100 */;
    border-bottom: 1px solid lightgray;
    z-index: 9;
    background: #fff;
    li:nth-of-type(2) {
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.2rem /* 20/100 */;
      p {
        position: relative;
        height: 1rem /* 100/100 */;
      }
      input[type='radio'] {
        position: absolute;
        display: none;
      }
    }
    label {
      margin-right: 34px;
      border: 1px solid lightgray;
      padding: 0.2rem /* 20/100 */ 0.3rem /* 30/100 */;
      margin: 0.2rem /* 20/100 */ 0.2rem /* 20/100 */ 0 0;
    }
    input:checked + label {
      background: red;
    }
  }
  //购买详情
  .c3 {
    display: flex;
    padding: 0.3rem /* 30/100 */;
    font-size: 0.4rem /* 40/100 */;
    justify-content: space-between;
    align-items: center;
    z-index: 9;
    background: #fff;
    button {
      width: 0.8rem /* 60/100 */;
      height: 0.6rem /* 60/100 */;
      background: #fff;
      margin: 0;
      border: none;
      border: 1px solid lightgray;
    }
  }
  //加入购物车字
  .c4 {
    width: 100%;
    height: 1rem /* 80/100 */;
    background: red;
    color: #fff;
    line-height: 1rem /* 80/100 */;
    text-align: center;
    font-size: 0.5rem /* 40/100 */;
  }
}
</style>

