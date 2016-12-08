<template>
  <div class="photo-list">
    <ul>
      <li v-for="photo in photos" class="photo-item">
        <img :src="photo.fname">
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
  export default {
    props:{
      photos: Array
    }
  }
</script>

<style lang="scss">
@import "../assets/sass/components/photo.scss";
</style>
