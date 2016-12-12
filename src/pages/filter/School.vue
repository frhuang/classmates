<template>
  <div class="school">
    <my-header title="学校" fixed>
      <my-back slot="left"></my-back>
      <a href="javascript:;" @click="reset" slot="right" class="reset-btn" v-show="typeId === 1">重置</a>
    </my-header>
    <div class="search-box">
      <mt-search
        autofocus
        placeholder="请输入学校全称"
        v-model="value">
      </mt-search>
    </div>
    <div class="pre-search-list" v-show="value != ''">
      <div class="pre-search-list-warp">
        <my-cell v-for="item in result" :title="item.name" @click.native="selectSchool(item.name, item.id)"></my-cell>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="top" class="popup-top" :modal="false">
      <p>重置成功</p>
    </mt-popup>
  </div>
</template>

<script type="text/babel">
import { rootUrl } from '../../config'
  export default {
    data () {
      return {
        value: '',
        popupVisible: false,
        typeId: 1,
        result: [],
        apiUrl: rootUrl + '/find/school-list',
        editUrl: rootUrl + '/user/edit'
      }
    },
    created(){
      this.typeId = parseInt(this.$route.params.id);
    },
    watch: {
      value() {
        if(this.value != '') {
          this.getSchool()
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
      selectSchool(title, id) {
        var rid = this.typeId;
        if(rid === 1) {
          this.$store.dispatch('selectFilterSchool', {id: id, name: title});
          this.$router.go(-1);
        }else if(rid === 2) {
          var vm = this;
          var params = {};
          params.schools = id;
          vm.$http.post(vm.editUrl, params).then((response) => {
            this.$router.go(-1);
          }, (response) => {
            // console.log(response);
          })
          .catch(function(response) {
          })
        }
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
      },
      reset() {
        this.$store.dispatch('selectFilterSchool', {
          id: '', name: ''
        });
        this.popupVisible = true;
      }
    }
  }
</script>
