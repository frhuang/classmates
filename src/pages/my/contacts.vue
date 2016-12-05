<template>
  <div class="contacts-pages">
    <my-header title="我的人脉" fixed>
      <my-back slot="left"></my-back>
    </my-header>
    <div class="contacts">
      <p class="contacts-title">共 {{length}} 位</p>
      <div class="contacts-list" ref="wrapper">
        <!-- <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore"> -->
          <ul class="page-loadmore-list">
            <li v-for="item in detailLists" class="money-listitem">
              <div class="flag">
                <div class="avatar flag-item">
                  <img class="avatar-img" :src="item.avatar">
                  <i :class="{'female': item.gender =='0', 'male': item.gender == '1'}"></i>
                </div>
                <div class="flag-item">
                  <div class="flag-title">
                      {{item.username}}
                  </div>
                  <div class="flag-money-content">
                    <div class="money-left money-cc">
                      <p class="flag-pro">
                        <span>中山大学</span><span>软件工程</span><span>2014级</span>
                      </p>
                      <p><span class="green-title">送了你{{moneyTypes[item.t]}}并说：</span><span>{{item.remark}}</span></p>
                    </div>
                    <div class="money-right">
                      <a @click="lookWeixin">查看微信</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        <!-- </mt-loadmore> -->
        <div class="default-pages" v-show="length == 0">
          <p>还没自己的大学人脉圈？</p>
          <router-link to="/">去找找</router-link>
        </div>
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
      rewards: "0.00",
      allLoaded: false,
      bottomStatus: '',
      wrapperHeight: 0,
      total: 0,
      moneyTypes: moneyTypes,
      size: 20,
      page: 1,
      length: 0,
      currentLength: 0,
      apiUrl: rootUrl + '/user/get-rolodex-list',
    }
  },
  methods: {
    handleBottomChange(status) {
      this.bottomStatus = status;
    },

    loadBottom(id) {
      if(this.currentLength >= this.size) {
        // this.getData();
      }else{
        this.allLoaded = true;
      }
      this.$refs.loadmore.onBottomLoaded(id);
    },
    lookWeixin() {
      alert('查看微信');
    },
    getData() {
      var vm = this;
      vm.$http.get(vm.apiUrl, {
        params: {size:vm.size, page: vm.page},
        emulateJSON: true
      }).then((response) => {
        var data = JSON.parse(response.data);
        var dd = data.data;
        for(let i=0; i < dd.length; i++) {
          this.detailLists.push(dd[i]);
        }
        console.log(this.detailLists);
        vm.currentLength = dd.length;
        vm.length = this.detailLists.length;
      })
      .catch(function(response) {
      })
    }
  },
  created() {
    this.getData();
  },
  mounted() {
   this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
 }
}
</script>

<style lang="scss">
@import "../../assets/sass/contacts.scss";
</style>
