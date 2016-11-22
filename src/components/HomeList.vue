<template>
  <div class="home-list">
        <router-link v-for="list in lists" class="flag" :to="'/personalinfo/'+list.id">
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
            <div class="flag-interest">
              <span v-for="item in list.interest">
                {{item}}
              </span>
            </div>
          </div>
        </router-link>
  </div>
</template>

<script type="text/babel">
  import { lists } from '../config.js';
  export default {
    data () {
      return {
        lists: lists
      }
    }
  }
</script>
<style lang="scss">
@import '../assets/sass/home.scss';
</style>
