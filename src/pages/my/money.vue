<template>
  <div class="money-pages">
    <mt-header title="人脉心意" fixed>
      <my-back slot="left"></my-back>
    </mt-header>
    <div class="money-content">
      <div class="money-header">
        <p class="header-title">今天收获心意</p>
        <p class="header-content">¥{{usable_money}}</p>
        <p class="header-footer">心意累计价值 <span class="red-title">{{total_money}}</span> 元，校内排名第 <span class="red-title">{{rank}}</span></p>
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
              <li class="item">{{today.frute}}</li>
              <li class="item">{{today.drink}}</li>
              <li class="item">{{today.coffee}}</li>
            </ul>
          </li>
          <li class="list-item">
            <ul>
              <li class="item">累计 <span class="grey-title">(份)</span></li>
              <li class="item">{{total.frute}}</li>
              <li class="item">{{total.drink}}</li>
              <li class="item">{{total.coffee}}</li>
            </ul>
          </li>
        </ul>
      </div>
      <p class="detail-title">心意明细</p>
      <div class="money-details" ref="wrapper">
        <!-- <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore"> -->
          <ul class="page-loadmore-list">
            <li v-for="item in detailLists" class="money-listitem">
              <div class="flag">
                <div class="avatar flag-item">
                  <img :src="item.avatar" class="avatar-img">
                  <i :class="{'female': item.gendar =='0', 'male': item.gendar == '1'}"></i>
                </div>
                <div class="flag-item">
                  <div class="flag-title">
                    <div class="money-left">
                      {{item.username}}
                    </div>
                    <div class="money-right">
                      {{item.create_date}}
                    </div>
                  </div>
                  <div class="flag-money-content">
                    <div class="money-left money-cc"><span class="green-title">送了你{{moneyTypes[item.t]}}并说：</span><span>{{item.remark}}</span></div>
                    <div class="money-right icon-right"><i :class="'icon-right icon'+item.t"></i></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        <!-- </mt-loadmore> -->
      </div>
      <div class="default-pages" v-show="detailLists.length == 0">
        <p>暂没收到人脉心意，记得多去活跃哦~</p>
        <router-link to="/">去瞧瞧</router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import { moneyTypes, rootUrl } from '../../config';

export default {
  data () {
    return {
      detailLists: [],
      usable_money: "0.00",
      total_money: '0',
      rank: '1',
      today: {
        coffee: '0',
        drink: '0',
        frute: '0'
      },
      total: {
        coffee: '0',
        drink: '0',
        frute: '0'
      },
      allLoaded: false,
      bottomStatus: '',
      wrapperHeight: 0,
      maxLength: 5,
      // total: 5,
      moneyTypes: moneyTypes,
      apiUrl: rootUrl + '/user/get-my-income-list'
    }
  },
  methods: {
    // handleBottomChange(status) {
    //   this.bottomStatus = status;
    // },
    //
    // loadBottom(id) {
    //   let lastValue = this.detailLists.length;
    //   setTimeout(() => {
    //     if (lastValue < this.maxLength) {
    //       for (let i = 1; i <= 10; i++) {
    //         // this.detailLists.push(lists["1"]);
    //       }
    //     } else {
    //       this.allLoaded = true;
    //     }
    //     this.$refs.loadmore.onBottomLoaded(id);
    //   }, 1500);
    // },
    getData() {
      var vm = this;
      vm.$http.get(vm.apiUrl, {
        params: {size:vm.size, page: vm.page},
        emulateJSON: true
      }).then((response) => {
        var data = JSON.parse(response.data);
        var orderInfo = data.data.orderInfo;
        var userData = data.data.userData;
        vm.detailLists = data.data.userTradeLog;
        vm.usable_money = userData.usable_money;
        vm.total_money = userData.total_money;
        vm.today.coffee = orderInfo.today[0].num;
        vm.today.drink = orderInfo.today[1].num;
        vm.today.frute = orderInfo.today[2].num;
        vm.total.coffee = orderInfo.total[0].num;
        vm.total.drink = orderInfo.total[1].num;
        vm.total.frute = orderInfo.total[2].num;
      })
      .catch(function(response) {
      })
    }
  },
  created() {
    this.getData();
    // for (let i = 0; i < lists.length; i++) {
    //   this.detailLists.push(lists[i]);
    // }
  },
  mounted() {
   this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().bottom;
 }
}
</script>

<style lang="scss">
@import "../../assets/sass/money.scss";
</style>
