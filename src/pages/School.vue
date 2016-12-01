<template>
  <div class="school">
    <mt-header title="学校" fixed>
      <my-back slot="left"></my-back>
    </mt-header>
    <pre-search class="fixed-top"
      placeholder="请输入学校全称"
      v-model="value">
      </pre-search>
      <div class="pre-search-list" v-show="value != ''">
        <div class="pre-search-list-warp">
          <slot>
            <callback-cell v-for="item in result" :id="item.id" :title="item.name" :callback="selectSchool"></callback-cell>
          </slot>
        </div>
      </div>
  </div>
</template>

<script type="text/babel">
import { rootUrl } from '../config'
  export default {
    data () {
      return {
        value: '',
        result: [],
        apiUrl: rootUrl + '/find/school-list'
      }
    },
    watch: {
      value() {
        if(this.value != '') {
          this.getSchool()
        }
      }
    },
    methods: {
      selectSchool(title, id) {
        console.log(this.$route.params.id);
        if(this.$route.params.id == 1) {
            this.$store.dispatch('selectFilterSchool', {id: id, name: title});
        }else {
          // this.$store.dispatch('selectFilterSchool', {id: id, name: title});
          console.log('my school')
        }

        this.$router.go(-1);
      },
      getSchool() {
        var vm = this;
        vm.$http.get(vm.apiUrl, {
          params: {name:vm.value},
          headers: {
          },
          emulateJSON: true
        }).then((response) => {
          var data = JSON.parse(response.data);
          vm.result = data.data;
        })
        .catch(function(response) {
        })
      }
    }
  }
</script>
