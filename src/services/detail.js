import Http from "../utils/http";
const _http = new Http();

class Detail{
  //详情页
  list(id){
    return _http.request({
      url: `${global.globalData.api}shop/goods/detail/?id=${id}`,
      method:"post"
    })
  }
}

export default Detail;