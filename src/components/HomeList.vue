<template>
  <div class="home-list" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
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
      <div class="default-pages" v-show="mainLists.length == 0">
        <p>该条件下找不到相应的童鞋哦</p>
        <router-link to="/filter">重新筛选</router-link>
      </div>
  </div>
</template>

<script type="text/babel">
import { mapState } from 'vuex';
  import { rootUrl } from '../config.js';
  export default {
    data () {
      return {
        mainLists: [],
        allLoaded: false,
        bottomStatus: '',
        total: 40,
        wrapperHeight: 0,
        page: 1,
        size: 20,
        apiUrl: rootUrl + '/find/list',
        city: '',
        school: '',
        speciality: '',
        syear: '',
        it_id: '',
        gender: '',
        status: false
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
      },
      loadData() {
        var vm = this;
        var params = {};
        if(!!vm.status) {
          if(vm.city != '') params.city = vm.city;
          if(vm.school != '') params.school = vm.school;
          if(vm.speciality != '') params.speciality = vm.speciality;
          if(vm.syear != '') params.syear = vm.syear;
          if(vm.it_id != '') params.it_id = vm.it_id;
          if(vm.gender != ' ') params.gender = vm.gender;
          params.size = vm.size;
          params.page = vm.page;
        }
        vm.$http.get(vm.apiUrl,{
          params: params,
          headers: {
          },
          emulateJSON: true}
        ).then((response) => {
          var data = JSON.parse(response.data);
          vm.mainLists = data.data;
        })
        .catch(function(response) {
        })
      }
    },
    created() {
      this.loadData();
    },
    mounted() {
     this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().bottom;
   },
   computed: mapState({
     city: state => state.filter.cityId,
     school: state => state.filter.schoolId,
     speciality: state => state.filter.professionId,
     syear: state => state.filter.year,
     it_id: state => state.filter.interestId,
     gender: state => state.filter.sex,
     status: state => state.filter.status
   })
  }
</script>
<style lang="scss">
@import '../assets/sass/home.scss';
</style>
