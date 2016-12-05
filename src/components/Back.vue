<template>
  <a @click="routerBack">
    <my-button class="common-back"></my-button>
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
