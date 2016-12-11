<template>
  <div class="profession">
    <my-header title="兴趣爱好" fixed>
      <my-back slot="left"></my-back>
    </my-header>
    <div class="cell-list">
      <my-cell v-for="interest in interests" :title="interest.name" @click.native="selectInterest(interest.name, interest.it_id)"></my-cell>
    </div>
  </div>
</template>

<script type="text/babel">
  import { rootUrl } from '../config';
  export default {
    data() {
      return {
        interests: [],
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
        var interests = data.data;
        for(let key in interests) {
          var list = interests[key]['list'];
          for(var i=0; i<list.length; i++) {
            let params = {};
            params.it_id = list[i]['it_id'];
            params.name = list[i]['name'];
            vm.interests.push(params);
          }
        }
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
