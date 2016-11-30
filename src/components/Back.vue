<template>
  <a @click="routerBack">
    <mt-button class="common-back"></mt-button>
  </a>
</template>

<script>
export default {
  name: 'my-back',
  methods: {
    routerBack() {
      this.$router.go(-1)
    }
  }
}
</script>
