<template>
  <div class="filter">
    <mt-header title="筛选">
      <router-link to="/" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
      <button class="filter-btn" slot="right" title="确定" @click="confirm">确定</button>
    </mt-header>
    <my-cell title="籍贯" to="/filter/nativeplace" :value="province +' '+ city" is-link req></my-cell>
    <my-cell title="学校" to="/filter/school" :value="school" is-link></my-cell>
    <my-cell title="专业" to="/filter/profession" :value="profession" is-link></my-cell>
    <my-cell title="入学年份" to="/filter/startyear" :value="year" is-link></my-cell>
    <my-cell title="兴趣爱好" to="/filter/interest" :value="interest" is-link></my-cell>
    <my-cell title="性别">
      <div class="pre-cell-sex">
        <pre-radio
          class="page-part"
          v-model="value"
          :options="options" />
      </div>
    </my-cell>
  </div>
</template>

<script type="text/babel">
import { mapState } from 'vuex';
  export default {
    data () {
      return {
        province: '',
        city: '',
        school: '不限',
        profession: '不限',
        year: '不限',
        interest: '不限',
        value: ' '
      }
    },
    created() {
      this.options = [
        {label: '全部', value: ' '},
        {label: '男', value: '0'},
        {label: '女', value: '1'}
      ];
    },
    methods: {
      confirm() {
        // alert('筛选信息为：'+this.province+this.city+this.school+this.profession+this.year+this.interest+this.value);
        this.$router.go(-1);
      }
    },
    computed: mapState({
      province: state => state.filter.province,
      city: state => state.filter.city,
      school: state => state.filter.school,
      profession: state => state.filter.profession,
      year: state => state.filter.year,
      interest: state => state.filter.interest
    })
  }
</script>

<style lang="scss">
  @import '../assets/sass/filter.scss';
</style>
