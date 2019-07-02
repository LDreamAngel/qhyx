//https://api.it120.cc/small4/shop/goods/kanjia/list

//services里是所有的axios请求
import Http from '../utils/http';
const _http = new Http();

//砍价相关的的请求类
class Bargain{
  //全民砍价
  all_bargain(){
    return _http.request({
      url: `${global.globalData.api}shop/goods/kanjia/list`,
      })
  }
  //砍价详情
  bargain_detail () {
    return _http.request({
     // https://api.it120.cc/small4/shop/goods/kanjia/info;
      url: `${global.globalData.api}shop/goods/kanjia/info`
    })
  }
}
export default Bargain;

