<template>
  <div class="profession">
    <mt-header title="兴趣爱好">
      <my-back slot="left"></my-back>
    </mt-header>
    <callback-cell v-for="interest in interests" :title="interest.name" :id="interest.it_id" :callback="selectInterest"></callback-cell>
  </div>
</template>

<script type="text/babel">
  import { rootUrl } from '../config';
  export default {
    data() {
      return {
        interests: {},
        apiUrl: rootUrl + '/find/interests-list'
      }
    },
    created() {
      var vm = this;
      vm.$http.get(vm.apiUrl,{
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
