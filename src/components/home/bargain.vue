<template>
  <div class="bargain">
    <p>
      <span>全民砍价</span>
      <span class="fa fa-power-off"></span>
    </p>
    <ul>
      <router-link
        tag="li"
        :to="{path: 'detail', query: {id: item.id }}"
        v-for="(item,i) in list"
        :key="i"
      >
        <img :src="item.pic" alt />
        <div>
          <p>{{item.name}}</p>
          <p>{{item.characteristic}}</p>
          <table>
            <tr>
              <td class="kanjiaPrice">¥{{item.kanjiaPrice}}</td>
              <td>¥{{item.originalPrice}}</td>
              <td>{{item.numberOrders}}件</td>
            </tr>
            <tr>
              <td class="kanjiaPrice1">底价</td>
              <td>原价</td>
              <td>限量</td>
            </tr>
          </table>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import Bargain from "../../services/bargain";

const _bargain = new Bargain();
export default {
  name: "Bargain",
  data() {
    return {
      list: []
    };
  },
  created() {
    _bargain.all_bargain().then(res => {
      this.list = res.data.data.goodsMap;
    });
  }
};
</script>

<style scoped lang='scss'>
.bargain {
  width: 100%;
  background: #fff;
  > p {
    height: 1.3rem;
    line-height: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    span:nth-of-type(1) {
      font-size: 0.45rem;
    }
    span:nth-of-type(2) {
      font-size: 0.5rem;
      color: #919191;
    }
  }
  li {
    border-top: 1px solid #f6f6f6;
    padding: 0.25rem;
    display: flex;
    img {
      width: 2.9rem;
      height: 2.9rem;
    }
    div {
      padding: 0.1rem 0.25rem;
      p:nth-of-type(1) {
        font-size: 0.45rem;
        line-height: 0.7rem;
      }
      p:nth-of-type(2) {
        font-size: 0.3rem;
        color: #9f9f9f;
        line-height: 0.9rem;
      }
    }
    table {
      tr {
        td {
          width: 2.3rem;
          font-size: 0.35rem;
          color: #9f9f9f;
        }
        .kanjiaPrice {
          color: red;
        }
        .kanjiaPrice1 {
          color: black;
        }
      }
    }
  }
}
</style>


