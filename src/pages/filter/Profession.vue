<template>
  <div class="school">
    <my-header title="专业" fixed>
      <my-back slot="left"></my-back>
      <a href="javascript:;" @click="reset" slot="right" class="reset-btn" v-show="typeId === 1">重置</a>
    </my-header>
    <div class="search-box">
      <mt-search
        autofocus
        placeholder="请输入专业全称"
        v-model="value">
      </mt-search>
    </div>
    <div class="pre-search-list" v-show="value">
      <div class="pre-search-list-warp">
        <slot>
          <my-cell v-for="item in result" :title="item.name" @click.native="selectProfession(item.name, item.id)"></my-cell>
        </slot>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="top" class="popup-top" :modal="false">
      <p>重置成功</p>
    </mt-popup>
  </div>
</template>

<script type="text/babel">
import { mapState } from 'vuex';
import { rootUrl } from '../../config';
export default {
  data () {
    return {
      value: '',
      sid: '',
      popupVisible: false,
      typeId: 1,
      result: [],
      apiUrl: rootUrl + '/find/speciality-list',
      editUrl: rootUrl + '/user/edit'
    }
  },
  created() {
    this.typeId = parseInt(this.$route.params.id);
    if(this.typeId === 1) {
      this.sid = this.$store.state.filter.schoolId;
    } else if(this.typeId === 2) {
      this.sid = this.$store.state.info.schools;
    }
  },
  watch: {
    value() {
      if(this.value != '') {
        this.getProfession();
      }
    },
    popupVisible(val) {
      if (val) {
        setTimeout(() => {
          this.popupVisible = false;
        }, 2000);
      }
    }
  },
  methods: {
    selectProfession(title, id) {
      var rid = this.typeId;
      if(rid === 1) {
        this.$store.dispatch('selectFilterProfession', {id: id, name: title});
        this.$router.go(-1);
      } else if(rid === 2) {
        var vm = this;
        var params = {};
        params.speciality = id;
        vm.$http.post(vm.editUrl, params).then((response) => {
          this.$router.go(-1);
        }, (response) => {
          // console.log(response);
        })
        .catch(function(response) {
        })
      }
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
    },
    reset() {
      this.$store.dispatch('selectFilterProfession', {
        id: '', name: ''
      });
      this.popupVisible = true;
    }
  }
}
</script>
