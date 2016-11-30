<template>
  <div class="lookta">
  <mt-header title="通过微信认识TA" fixed>
    <my-back slot="left"></my-back>
  </mt-header>
  <div class="looklist">
    <p class="look-title">
      <span class="red-title">*</span><span class="green-title">认识理由</span><span class="grey-title"> (礼貌不唐突)</span>
    </p>
    <div class="textwrapper"><textarea class="look-textarea" :placeholder="placeholder"></textarea></div>
    <p class="look-title">
      <span class="red-title">*</span><span class="green-title">带点小心意</span><span class="grey-title"> (礼轻情意重)</span>
    </p>
    <mt-radio
      align="right"
      v-model="value"
      :options="options" />
  </div>
  <mt-tabbar fixed>
    <mt-tab-item id="带心意查看微信" class="nav-join">
      带心意查看微信
      <router-link to="/"></router-link>
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>

<script type="text-babel">
  export default {
    data () {
      return {
        value: "10元红包请TA喝杯咖啡",
        placeholder: "说说你想认识人家的理由，这样显得有礼貌不唐突，至少5个字",
        selected: "带心意查看微信"
      }
    },
    created() {
      this.options = ["10元红包请TA喝杯咖啡", "5元红包请TA喝瓶饮料", "3元红包请TA饭堂加个菜"]
    },
    methods: {
      
    }
  }
</script>
<style lang="scss">
@import "../assets/sass/lookta.scss";
</style>
