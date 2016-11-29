<template>
  <div class="school">
    <mt-header title="学校" fixed>
      <router-link to="/filter" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
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
  export default {
    data () {
      return {
        value: '',
        result: []
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
        this.$store.dispatch('selectFilterSchool', {id: id, name: title});
        this.$router.go(-1);
      },
      getSchool() {
        var vm = this;
        vm.$http.get('http://schoolmate.liyuzhou.net/api/find/school-list',{
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
