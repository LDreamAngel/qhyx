import Http from "../utils/http.js";
const _http = new Http();

class Sort{
  //分类
  list(){
    return _http.request({
      url: `${global.globalData.api}shop/goods/category/all`
    })
  }
}

export default Sort;
