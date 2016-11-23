<template>
  <div class="filter">
    <mt-header title="筛选">
      <router-link to="/" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
    </mt-header>
    <mt-cell title="籍贯" to="/filter/nativeplace" :value="province +' '+ city" is-link></mt-cell>
    <mt-cell title="学校" to="/filter/school" :value="school" is-link></mt-cell>
    <mt-cell title="专业" to="/filter/profession" value="不限" is-link></mt-cell>
    <mt-cell title="入学年份" to="/filter/startyear" :value="year" is-link></mt-cell>
    <mt-cell title="兴趣爱好" to="/filter/interest" :value="interest" is-link></mt-cell>
    <mt-cell title="性别">
      <div class="pre-cell-sex">
        <!-- <div class="switch">
<input type="radio" class="switch-input" name="view" value="one" id="one" checked>
<label for="one" class="switch-label switch-label-off">ONE</label>
<input type="radio" class="switch-input" name="view" value="two" id="two">
<label for="two" class="switch-label switch-label-on">TWO</label>
<span class="switch-selection"></span> -->
        <pre-radio
          class="page-part"
          v-model="value"
          :options="options" />
      </div>
    </mt-cell>
      <mt-cell>{{ value }}</mt-cell>
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
    computed: mapState({
      province: state => state.province.province,
      city: state => state.province.city,
      year: state => state.province.year,
      interest: state => state.province.interest
    })
  }
</script>

<style lang="scss">
  @import '../assets/sass/filter.scss';
.pre-cell-sex{
  a{
    display: block;
    padding: 0 .1rem;
    width: 2rem;
    height: .8rem;
    border: 1px solid #999999;
  }
}
.switch {
  font: 16px Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  position: relative;
  // margin: 20px auto;
  height: 60px;
  width: 345px;
  // @include border-radius(3px);
  // @include background-clip(padding-box);
  background-color: #a7a7a7;
  // @include background-image(linear-gradient(bottom, rgba(255, 255, 255, .07) 0%, rgba(0, 0, 0, .07) 100%));
}

.switch-label {
  position: relative;
  z-index: 2;
  float: left;
  width: 170px;
  line-height: 60px;
  font-size: 16px;
  letter-spacing: 1px;
  color: #f1f1f1;
  text-align: center;
  cursor: pointer;
}

.switch-label-off {
  padding-left: 2px;
}

.switch-label-on {
  padding-right: 2px;
}

.switch-input {
  display: none;
}

.switch-input:checked + .switch-label {
  color: #fff;
  -webkit-transition: 500ms cubic-bezier(0.075, 0.820, 0.165, 1.000);
  -moz-transition: 500ms cubic-bezier(0.075, 0.820, 0.165, 1.000);
  -ms-transition: 500ms cubic-bezier(0.075, 0.820, 0.165, 1.000);
  -o-transition: 500ms cubic-bezier(0.075, 0.820, 0.165, 1.000);
  transition: 500ms cubic-bezier(0.075, 0.820, 0.165, 1.000);
  -webkit-transition-timing-function: cubic-bezier(0.075, 0.820, 0.165, 1.000);
  -moz-transition-timing-function: cubic-bezier(0.075, 0.820, 0.165, 1.000);
  -ms-transition-timing-function: cubic-bezier(0.075, 0.820, 0.165, 1.000);
  -o-transition-timing-function: cubic-bezier(0.075, 0.820, 0.165, 1.000);
  transition-timing-function: cubic-bezier(0.075, 0.820, 0.165, 1.000);
}

.switch-input:checked + .switch-label-on ~ .switch-selection {
  left: 172px;
}

.switch-selection {
  display: block;
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 170px;
  height: 60px;
  // @include border-radius(2px);
  // @include background-clip(padding-box);
  background-color: green;
  -webkit-transition: 500ms cubic-bezier(0.075, 0.820, 0.165, 1.000);
  -moz-transition: 500ms cubic-bezier(0.075, 0.820, 0.165, 1.000);
  -ms-transition: 500ms cubic-bezier(0.075, 0.820, 0.165, 1.000);
  -o-transition: 500ms cubic-bezier(0.075, 0.820, 0.165, 1.000);
  transition: 500ms cubic-bezier(0.075, 0.820, 0.165, 1.000);
  -webkit-transition-timing-function: cubic-bezier(0.075, 0.820, 0.165, 1.000);
  -moz-transition-timing-function: cubic-bezier(0.075, 0.820, 0.165, 1.000);
  -ms-transition-timing-function: cubic-bezier(0.075, 0.820, 0.165, 1.000);
  -o-transition-timing-function: cubic-bezier(0.075, 0.820, 0.165, 1.000);
  transition-timing-function: cubic-bezier(0.075, 0.820, 0.165, 1.000);
}
</style>
