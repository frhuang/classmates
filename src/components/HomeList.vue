<template>
  <div class="home-list" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
      <!-- <ul class="page-loadmore-list">
          <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
        </ul> -->
        <router-link v-for="list in mainLists" class="flag" :to="'/personalinfo/'+list.uid">
          <div class="avatar flag-item">
            <img :src="list.avatar" class="avatar-img">
            <i :class="{'female': list.gender =='0', 'male': list.gender == '1'}"></i>
          </div>
          <div class="flag-item">
            <div class="flag-title">{{list.username}}
              <span class="flag-auth" v-if="list.is_auth == 1">已认证</span>
              <span class="flag-auth" v-if="list.is_know == 1">已认识</span>
            </div>
            <div class="flag-pro">
              <span>{{list.schools_text}}</span>
              <span>{{list.speciality_text}}</span>
              <span>{{list.syear}}级</span>
            </div>
            <div class="flag-interest">
              <span v-for="item in list.Interests">
                {{item}}
              </span>
            </div>
          </div>
        </router-link>
      </mt-loadmore>
  </div>
</template>

<script type="text/babel">
  import { lists } from '../config.js';
  export default {
    data () {
      return {
        mainLists: [],
        allLoaded: false,
        bottomStatus: '',
        total: 40,
        wrapperHeight: 0
      }
    },
    methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },

      loadBottom(id) {
        // let lastValue = this.mainLists.length;
        // console.log(lastValue, this.total);
        // setTimeout(() => {
        //   if (lastValue < this.total) {
        //     for (let i = 1; i <= 10; i++) {
        //       this.mainLists.push(lists["1"]);
        //     }
        //   } else {
        //     this.allLoaded = true;
        //   }
        //   this.$refs.loadmore.onBottomLoaded(id);
        // }, 1500);
      }
    },
    created() {
      var vm = this;
      vm.$http.get('http://schoolmate.liyuzhou.net/api/find/list',{
        params: {},
        headers: {
        },
        emulateJSON: true}
      ).then((response) => {
        var data = JSON.parse(response.data);
        vm.mainLists = data.data;
      })
      .catch(function(response) {
      })
    },
    mounted() {
     this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().bottom;
   }
  }
</script>
<style lang="scss">
@import '../assets/sass/home.scss';
</style>
