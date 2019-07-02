//轮播图
import Http from '../utils/http';
const _http = new Http();

class Banner{
    list () {
      return _http.request({
           url: `${global.globalData.api}banner/list`
           })
    } 
}
export default Banner;