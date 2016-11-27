<template>
  <div class="contacts-pages">
    <mt-header title="我的人脉" fixed>
      <a @click="routerBack" slot="left">
        <mt-button class="common-back"></mt-button>
      </a>
    </mt-header>
    <div class="contacts">
      <p class="contacts-title">共100位</p>
      <div class="contacts-list" ref="wrapper">
        <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <ul class="page-loadmore-list">
            <li v-for="item in detailLists" class="money-listitem">
              <div class="flag">
                <div class="avatar flag-item">
                  <img class="avatar-img">
                  <i :class="{'female': item.s =='2', 'male': item.s == '1'}"></i>
                </div>
                <div class="flag-item">
                  <div class="flag-title">
                      {{item.n}}
                  </div>
                  <div class="flag-money-content">
                    <div class="money-left money-cc">
                      <p class="flag-pro">
                        <span>中山大学</span><span>软件工程</span><span>2014级</span>
                      </p>
                      <p><span class="green-title">送了你{{moneyTypes[item.t]}}并说：</span><span>{{item.c}}</span></p>
                    </div>
                    <div class="money-right">
                      <a @click="lookWeixin">查看微信</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </mt-loadmore>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
var lists = [
  {"n":"伊莎贝拉", "s": 1, "t": 1, "c":"想和你交个朋友，我也喜欢摄影！"},
  {"n":"大卫", "s": 2, "t": 2, "c":"想和你交个朋友，我也喜欢摄影！"},
  {"n":"拉斯", "s": 1, "t": 3, "c":"想和你交个朋友，我也喜欢摄影！"},
  {"n":"拉斯", "s": 1, "t": 3, "c":"想和你交个朋友，我也喜欢摄影！"},
  {"n":"拉斯", "s": 1, "t": 3, "c":"想和你交个朋友，我也喜欢摄影！"},
  {"n":"拉斯", "s": 1, "t": 3, "c":"想和你交个朋友，我也喜欢摄影！"},
  {"n":"拉斯", "s": 1, "t": 3, "c":"想和你交个朋友，我也喜欢摄影！"}
];

import { moneyTypes } from '../../config';

export default {
  data () {
    return {
      detailLists: [],
      rewards: "0.00",
      allLoaded: false,
      bottomStatus: '',
      wrapperHeight: 0,
      total: 3,
      moneyTypes: moneyTypes
    }
  },
  methods: {
    handleBottomChange(status) {
      this.bottomStatus = status;
    },

    loadBottom(id) {
      let lastValue = this.detailLists.length;
      setTimeout(() => {
        if (lastValue < this.total) {
          for (let i = 1; i <= 10; i++) {
            this.detailLists.push(lists["1"]);
          }
        } else {
          this.allLoaded = true;
        }
        this.$refs.loadmore.onBottomLoaded(id);
      }, 1500);
    },
    lookWeixin() {
      alert('查看微信');
    },
    routerBack() {
      this.$router.go(-1);
    }
  },
  created() {
    for (let i = 0; i < lists.length; i++) {
      this.detailLists.push(lists[i]);
    }
  },
  mounted() {
   this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
 }
}
</script>

<style lang="scss">
@import "../../assets/sass/contacts.scss";
</style>
