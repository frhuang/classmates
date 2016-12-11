<template>
  <div class="filter">
    <my-header title="筛选">
      <router-link to="/" slot="left">
        <my-button class="common-back"></my-button>
      </router-link>
      <button class="filter-btn" slot="right" title="确定" @click="confirm">确定</button>
    </my-header>
    <my-cell title="籍贯" to="/filter/nativeplace/1" :value="province == '' ? '不限' : province +' '+ city" is-link req></my-cell>
    <my-cell title="学校" to="/filter/school/1" :value="school == '' ? '不限' : school" is-link></my-cell>
    <my-cell title="专业" to="/filter/profession/1" :value="profession == '' ? '不限' : profession" is-link></my-cell>
    <my-cell title="入学年份" to="/filter/startyear/1" :value="year == '' ? '不限' : year" is-link></my-cell>
    <my-cell title="兴趣爱好" to="/filter/interest" :value="interest == '' ? '不限' : interest" is-link></my-cell>
    <my-cell title="性别">
      <div class="pre-cell-sex">
        <my-radio
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
        this.$store.dispatch('selectFilterSex', this.value);
        this.$store.dispatch('setFilterStatus', true);
        this.$router.push('/');
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
