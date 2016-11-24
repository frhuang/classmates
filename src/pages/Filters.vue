<template>
  <div class="filter">
    <mt-header title="筛选">
      <router-link to="/" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
      <button class="filter-btn" slot="right" title="确定" @click="confirm">确定</button>
    </mt-header>
    <mt-cell title="籍贯" to="/filter/nativeplace" :value="province +' '+ city" is-link></mt-cell>
    <mt-cell title="学校" to="/filter/school" :value="school" is-link></mt-cell>
    <mt-cell title="专业" to="/filter/profession" :value="profession" is-link></mt-cell>
    <mt-cell title="入学年份" to="/filter/startyear" :value="year" is-link></mt-cell>
    <mt-cell title="兴趣爱好" to="/filter/interest" :value="interest" is-link></mt-cell>
    <mt-cell title="性别">
      <div class="pre-cell-sex">
        <pre-radio
          class="page-part"
          v-model="value"
          :options="options" />
      </div>
    </mt-cell>
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
        value: '全部'
      }
    },
    created() {
      this.options = ['全部', '男', '女'];
    },
    methods: {
      confirm() {
        alert('筛选信息为：'+this.province+this.city+this.school+this.profession+this.year+this.interest+this.value);
        this.$router.push('/');
      }
    },
    computed: mapState({
      province: state => state.province.province,
      city: state => state.province.city,
      school: state => state.province.school,
      profession: state => state.province.profession,
      year: state => state.province.year,
      interest: state => state.province.interest
    })
  }
</script>

<style lang="scss">
  @import '../assets/sass/filter.scss';
</style>
