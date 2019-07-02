
////recommendStatusStr

import Http from '../utils/http';
const _http = new Http;
class Home{
  //推荐,砍价
  recommend(){
    return _http.request({
      url: `${global.globalData.api}shop/goods/list`
    })
  }
  //推荐详情
  recommend_det (id) {
    //https://api.it120.cc/small4/shop/goods/detail
    return _http.request({
      url: `${global.globalData.api}shop/goods/detail?id=${id}`,
      method:'post'
    })
  }
}

export default Home;



