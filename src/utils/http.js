//utils里用来存放工具，比如filter,directive,也可以写http

import Axios from "axios";
//定义一个http类,是定义的axios，封装了axios请求的方法
class Http{
  request (params) {
    return new Promise((resolve, reject) => {
      Axios({
        method: params.type || 'get',
        url: params.url,
        data:params.data
      }).then(res => {
        if(res.data.code==0){
          resolve(res)//成功
        } else {
          alert(res.data.msg)
        }
        }).catch(err => {
          reject(err.statusText)//失败
      })
    })
  }
} 

export default Http;