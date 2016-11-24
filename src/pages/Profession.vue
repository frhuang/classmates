<template>
  <div class="school">
    <mt-header title="专业">
      <router-link to="/filter" slot="left">
        <mt-button class="common-back"></mt-button>
      </router-link>
    </mt-header>
    <pre-search
      placeholder="请输入专业全称"
      v-model="value">
      </pre-search>
      <div class="pre-search-list" v-show="value">
        <div class="pre-search-list-warp">
          <slot>
            <pre-cell v-for="(item, index) in filterResult" :key="index" :title="item" :callback="selectProfession"></pre-cell>
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
        '网络工程',
        '软件工程',
        '计算机技术',
        '数字和科学',
        '旅游管理',
        '日语',
        '英语',
        '生命科学',
        '哲学',
        '经济学',
        '法学',
        '教育学',
        "文学"
      ]
    }
  },
  computed: {
    filterResult () {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
  },
  methods: {
    selectProfession(key) {
      this.$store.dispatch('selectProfession', key);
      this.$router.push('/filter');
    }
  }
}
</script>
