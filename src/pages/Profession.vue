<template>
  <div class="school">
    <mt-header title="专业" fixed>
      <my-back slot="left"></my-back>
    </mt-header>
    <pre-search class="fixed-top"
      placeholder="请输入专业全称"
      v-model="value">
      </pre-search>
      <div class="pre-search-list" v-show="value">
        <div class="pre-search-list-warp">
          <slot>
            <callback-cell v-for="item in result" :id="item.id" :title="item.name" :callback="selectProfession"></callback-cell>
          </slot>
        </div>
      </div>
  </div>
</template>

<script type="text/babel">
import { mapState } from 'vuex';
export default {
  data () {
    return {
      value: '',
      sid: '',
      result: []
    }
  },
  computed: mapState({
    sid: state => state.filter.schoolId,
  }),
  watch: {
    value() {
      if(this.value != '') {
        this.getProfession();
      }
    }
  },
  methods: {
    selectProfession(title, id) {
      this.$store.dispatch('selectFilterProfession', {id: id, name: title});
      this.routerBack();
    },
    getProfession() {
      var vm = this;
      vm.$http.get('http://schoolmate.liyuzhou.net/api/find/speciality-list',{
        params: {name:vm.value, sid: vm.sid},
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
