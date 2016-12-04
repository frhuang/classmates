<template>
  <div class="records-pages">
    <mt-header fixed>
      <my-back slot="left"></my-back>
    </mt-header>
    <my-navbar class="records-header" v-model="selected">
      <my-nav-item id="1" @click.native ="viewMe(1)">访问过我</my-nav-item>
      <my-nav-item id="2" @click.native ="viewMe(2)">我访问过</my-nav-item>
    </my-navbar>
    <p class="records-title">共 {{detailLists.length}} 位</p>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <view-list :detailLists="detailLists"></view-list>
        <div class="default-pages" v-show="detailLists.length == 0">
          <p>平时多上来露露脸，相册等个人信息丰富完善一点</p>
          <router-link to="/my/myinfo">去完善</router-link>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <view-list :detailLists="detailLists"></view-list>
        <div class="default-pages" v-show="detailLists.length == 0">
          <p>各大高校大学生都在这，快去认识下吧</p>
          <router-link to="/my/myinfo">去瞧瞧</router-link>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script type="text/babel">
import MyNavItem from '../../uicomponents/NavItem.vue';
import MyNavbar from '../../uicomponents/Navbar.vue';
import ViewList from '../../components/ViewList';
import { rootUrl } from '../../config';
export default {
  data () {
    return {
      detailLists: [],
      selected: '1',
      page: 1,
      size: 20,
      apiUrl: rootUrl + '/user/get-view-me-list'
    }
  },
  created() {
    this.getData();
  },
  methods: {
    viewMe(type) {
      if(type == 1) {
        this.apiUrl = rootUrl + '/user/get-view-me-list';
      }else if(type == 2) {
        this.apiUrl = rootUrl + '/user/get-my-view-list';
      }
      this.detailLists = [];
      this.getData();
    },
    getData() {
      var vm = this;
      vm.$http.get(vm.apiUrl, {
        params: {size:vm.size, page: vm.page},
        emulateJSON: true
      }).then((response) => {
        var data = JSON.parse(response.data);
        var dd = data.data;
        for(let i=0; i< dd.length ; i++) {
          this.detailLists.push(dd[i]);
        }
      })
      .catch(function(response) {
      })
    }
  },
  components: {
    MyNavItem,
    MyNavbar,
    ViewList
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/records.scss";
</style>
