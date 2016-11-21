<template>
  <div class="home-list">
    <ul>
      <li v-for="list in lists" class="flag">
        <a href="#" class="avatar flag-item"><img :src="list.img" class="avatar-img"></a>
        <div class="flag-item">
          <div class="flag-title">{{list.name}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
  import { lists } from '../config.js';
  export default {
    data () {
      return {
        lists: lists
      }
    }
  }
</script>
<style lang="scss">
ul{
  list-style: none;
  margin: 0;
  padding:0;
}
.flag {
  display: table;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  padding: 0.26666666666666666rem 0;
}
.flag .flag-item {
    display: table-cell;
    vertical-align: top;
    background-color: #fff;
    &.avatar{
      width: 2.1333333333333333rem;
    }
    .avatar-img {
      margin-left: 0.26666666666666666rem;
      display: block;
      border-radius: 50%;
      width: 1.6rem;
      height: 1.6rem;
    }
}

</style>
