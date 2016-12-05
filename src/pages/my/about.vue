<template>
  <div class="about-pages">
    <my-header title="关于找同学">
      <my-back slot="left"></my-back>
    </my-header>
    <div class="about-content">
      <div class="content">
        <p class="header">找同学，旨在帮助全国大学生建立一种最简单有效的交友渠道。我们通过严格的信息认证，帮助全国高校大学生建立了一个干净、极简、高效的校园交友平台。</p>
        <h3>联系我们</h3>
        <p>Q Q  :   12354636</p>
        <p>电话 :   <span class="green-title">12354636</span></p>
        <p>微信公众号 : 12354636</p>
        <div class="centent-img">
          <img src="/static/img/student-card.png" alt="" />
        </div>
      </div>
      <p class="footer">广州峡谷科技有限公司</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    routerBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/about.scss";
</style>
