<template>
  <div class="personal">
   <div id="box">
        <div class="con">
            <span>
                <img src="../../assets/img/1.png" alt="">
            </span>
            <span>
                <div>无忧</div>
                <div>积分:20</div>
            </span>
        </div>
        <div class="con1">
            新上线更稳定的付费快递查询接口
        </div>
        <div class="transit"></div>
    </div>
    <div id="con2">
            <span>
                <p class="iconfont icon-document"></p>
                <p>我的余额</p>
                <p>0元</p>
            </span>
            <span>
                <p class="iconfont icon-time"></p>
                <p>待发货</p>
            </span>
            <span>
                <p class="iconfont icon-pics"></p>
                <p>待收货</p>
            </span>
        </div>
        <div id="con2">
            <span>
                <p class="iconfont icon-star"></p>
                <p>我的收藏</p>
            </span>
            <span>
                <p class="iconfont icon-loans"></p>
                <p>我的地址</p>
            </span>
            <span>
                <p class="iconfont icon-tag"></p>
                <p>联系客服</p>
            </span>
        </div>
        <div id="con3">
            清欢严选v2.2.0
        </div>
  </div>
</template>
<script>

export default {
  name:'Personal'
}
</script>
<style scoped lang='scss'>
#box{
    font-size: 20px;
   
    .con{
        display: block;
         width: 100%;
         height: 5.8rem /* 580/100 */;
        color: white;
        background: #D3C2A4;
        img{
            width: 1.5rem;
            margin-top: 1.5rem;
        }
        span:nth-of-type(2){
            display: block;
            margin-top: -1.6rem;
            margin-left: 1.7rem;
            div{
                margin-top: 0.2rem;
            }
            div:nth-of-type(2){
                font-size: 16px;
                width: 1.2rem;
                height: 0.5rem;
                text-align: center;
                line-height: 0.5rem;
                border-radius: 5px;
                background: #B3A078;
            }
        }
    }
    .con1{
        height: 0.7rem;
        line-height: 0.7rem;
        font-size: 16px;
        padding-left: 1rem;
    }
    .transit{
            border: solid 4px #F5F5F5;
        }
}
#con2{
    font-size: 15px;
    display: flex;
    margin-bottom: 0.1rem;
    justify-content: space-around;
    text-align: center;
    p:nth-of-type(1){
        font-size: 27px;
    }
    span{
        width: 33%;
        flex-direction: column;
        display: block;
    }
}
#con3{
    font-size: 16px;
    padding-top:0.3rem;
    height:2.4rem ;
    text-align: center;
    background: #CFD9E7;
}
</style>
