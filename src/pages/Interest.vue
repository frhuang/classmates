<template>
  <div class="profession">
    <mt-header title="兴趣爱好">
      <router-link to="/filter" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
    </mt-header>
    <callback-cell v-for="interest in interests" :title="interest.name" :id="interest.it_id" :callback="selectInterest"></callback-cell>
  </div>
</template>

<script type="text/babel">
  import { interests } from '../config.js';
  export default {
    data() {
      return {
        interests: {}
      }
    },
    created() {
      var vm = this;
      vm.$http.get('http://schoolmate.liyuzhou.net/api/find/interests-list',{
        params: {type:2},
        headers: {
        },
        emulateJSON: true
      }).then((response) => {
        var data = JSON.parse(response.data);
        vm.interests = data.data;
      })
      .catch(function(response) {
      })
    },
    methods: {
      selectInterest(title, id) {
        this.$store.dispatch('selectFilterInterest', {id: id, name: title});
        this.$router.push('/filter');
      }
    }
  }
</script>
