<template>
  <div class="money-pages">
    <mt-header title="人脉心意" fixed>
      <a @click="routerBack" slot="left">
        <mt-button class="common-back"></mt-button>
      </a>
    </mt-header>
    <div class="money-content">
      <div class="money-header">
        <p class="header-title">今天收获心意</p>
        <p class="header-content">¥{{rewards}}</p>
        <p class="header-footer">心意累计价值 <span class="red-title">1000</span> 元，校内排名第 <span class="red-title">1</span></p>
      </div>
      <div class="money-list">
        <ul>
          <li class="list-item">
            <ul>
              <li class="item"></li>
              <li class="item"><i class="icon1"></i></li>
              <li class="item"><i class="icon2"></i></li>
              <li class="item"><i class="icon3"></i></li>
            </ul>
          </li>
          <li class="list-item">
            <ul>
              <li class="item">今天 <span class="grey-title">(份)</span></li>
              <li class="item">5</li>
              <li class="item">8</li>
              <li class="item">12</li>
            </ul>
          </li>
          <li class="list-item">
            <ul>
              <li class="item">累计 <span class="grey-title">(份)</span></li>
              <li class="item">5</li>
              <li class="item">8</li>
              <li class="item">1200000</li>
            </ul>
          </li>
        </ul>
      </div>
      <p class="detail-title">心意明细</p>
      <div class="money-details" ref="wrapper">
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
                    <div class="money-left">
                      {{item.n}}
                    </div>
                    <div class="money-right">
                      2016.11.11
                    </div>
                  </div>
                  <div class="flag-money-content">
                    <div class="money-left money-cc"><span class="green-title">送了你{{moneyTypes[item.t]}}并说：</span><span>{{item.c}}</span></div>
                    <div class="money-right icon-right"><i :class="'icon-right icon'+item.t"></i></div>
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
   this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().bottom;
 }
}
</script>

<style lang="scss">
@import "../../assets/sass/money.scss";
</style>
