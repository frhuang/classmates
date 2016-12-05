<template>
  <div class="school">
    <my-header title="专业" fixed>
      <my-back slot="left"></my-back>
    </my-header>
    <my-search class="fixed-top"
      placeholder="请输入专业全称"
      v-model="value">
    </my-search>
      <div class="pre-search-list" v-show="value">
        <div class="pre-search-list-warp">
          <slot>
            <my-cell v-for="item in result" :title="item.name" @click.native="selectProfession(item.name, item.id)"></my-cell>
          </slot>
        </div>
      </div>
  </div>
</template>

<script type="text/babel">
import { mapState } from 'vuex';
import { rootUrl } from '../config';
export default {
  data () {
    return {
      value: '',
      sid: '',
      result: [],
      apiUrl: rootUrl + '/find/speciality-list'
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
      this.$router.go(-1);
    },
    getProfession() {
      var vm = this;
      vm.$http.get(vm.apiUrl, {
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
