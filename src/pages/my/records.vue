<template>
  <div class="records-pages">
    <mt-header fixed>
      <my-back slot="left"></my-back>
    </mt-header>
    <!-- <mt-navbar class="records-header" v-model="selected">
      <mt-tab-item id="1">访问过我</mt-tab-item>
      <mt-tab-item id="2">我访问过</mt-tab-item>
    </mt-navbar> -->
    <pre-navbar class="records-header" v-model="selected">
      <pre-nav-item id="1">访问过我</pre-nav-item>
      <pre-nav-item id="2">我访问过</pre-nav-item>
    </pre-navbar>
    <p class="records-title">共100位</p>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div v-for="list in mainLists" class="flag">
          <div class="avatar flag-item">
            <img :src="list.img" class="avatar-img">
            <i :class="{'female': list.sex =='2', 'male': list.sex == '1'}"></i>
          </div>
          <div class="flag-item">
            <div class="flag-title">{{list.name}}</div>
            <div class="flag-pro">
              <span>{{list.stu}}</span>
              <span>{{list.pro}}</span>
              <span>{{list.lv}}级</span>
            </div>
            <div class="flag-pro">
              2013.05.21
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script type="text/babel">
import PreNavItem from '../../uicomponents/NavItem.vue';
import PreNavbar from '../../uicomponents/Navbar.vue';
import { lists } from '../../config';
export default {
  data () {
    return {
      mainLists: lists,
      selected: '1'
    }
  },
  methods: {
    routerBack() {
      this.$router.go(-1);
    }
  },
  components: {
    PreNavItem,
    PreNavbar
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/records.scss";
</style>
