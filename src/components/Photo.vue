<template>
  <div class="photo-list">
    <a v-for="photo in photos" class="photo-item" href="javascript:;" @click="showAlbum(photo.fname)" >
      <img :src="photo.fname">
    </a>
    <!-- <ul>
      <li v-for="photo in photos" class="photo-item">
        <img :src="photo.fname">
      </li>
    </ul> -->
  </div>
</template>

<script type="text/babel">
  export default {
    props:{
      photos: Array
    },
    methods: {
      showAlbum(str) {
        this.$store.dispatch('albumImgSrc', {title: '个人相册', src: str})
        this.$router.push('/my/myinfo/album');
      }
    }
  }
</script>

<style lang="scss">
@import "../assets/sass/components/photo.scss";
</style>
