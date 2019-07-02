import Http from '../utils/http';
const _http = new Http();

class Cart{
  //购物车页面的
  list () {
    return _http.request({
      url: `${global.globalData.api}shop/goods/list`
    })
  }
}

export default Cart;