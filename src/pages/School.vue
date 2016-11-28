<template>
  <div class="school">
    <mt-header title="学校">
      <router-link to="/filter" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
    </mt-header>
    <pre-search
      placeholder="请输入学校全称"
      v-model="value">
      </pre-search>
      <div class="pre-search-list" v-show="value">
        <div class="pre-search-list-warp">
          <slot>
            <my-cell v-for="(item, index) in filterResult" :key="index" :title="item" :callback="selectSchool"></my-cell>
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
        defaultResult: [
          '中山大学',
          '华南理工大学',
          '华南师范大学',
          '暨南大学',
          '广东外语外贸大学',
          '广东技术师范学院',
          '南方医科大学',
          '星海音乐学院',
          '广东工业大学',
          '广州大学',
          '广州体育学院',
          '广州美术学院'
        ]
      }
    },
    computed: {
      filterResult () {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    },
    methods: {
      selectSchool(key) {
        this.$store.dispatch('selectSchool', key);
        this.$router.push('/filter');
      }
    }
  }
</script>
