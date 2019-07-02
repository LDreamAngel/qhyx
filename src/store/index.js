import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    isShow: false,
    cart: [],
    goods: ''
  },
  mutations: {
    //显示
    show (state) {
      state.isShow = true;
    },
    //隐藏
    hide (state) {
      state.isShow = false;
    },
    //加
    addNum (state, type) {
      state.cart.find(val => {
        if (val.id == type.id) {
          val.num++;
        }
      })

    },
    //减
    subNum (state, type) {
      state.cart.find(val => {
        if (val.id == type.id && val.num > 1) {
          val.num--;
        }
      })
    },
    //加入购物车detail里的
    add (state, obj) {
      state.goods = obj;
       console.log(state.goods)
    },
    //加入购物车
    add1 (state, data) {
      let re = state.cart.find(val => val.id == data.id);
      if (re) {
        re.num++;
      } else {
        state.cart.push(data);
      }
      //console.log(state.cart)
    }
  }
})

export default store