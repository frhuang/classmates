<template>
  <div class="pre-search">
    <div class="pre-searchbar">
      <div class="pre-searchbar-inner">
        <input
        ref="input"
        @click="visible = true"
        type="search"
        v-model="currentValue"
        :placeholder="visible ? placeholder : ''"
        class="pre-searchbar-core">
      </div>
      <a
        class="pre-searchbar-cancel"
        @click="visible = false, currentValue = ''"
        v-show="visible"
        v-text="cancelText">
      </a>
      <label
        @click="visible = true, $refs.input.focus()"
        class="pre-searchbar-placeholder"
        v-show="!visible">
        <span class="pre-searchbar-text" v-text="placeholder"></span>
      </label>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'my-search',

  data() {
    return {
      visible: false,
      currentValue: this.value
    };
  },

  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },

    value(val) {
      this.currentValue = val;
    }
  },

  props: {
    value: String,
    autofocus: Boolean,
    show: Boolean,
    cancelText: {
      default: '取消'
    },
    placeholder: {
      default: '搜索'
    },
    result: Array,
  },

  mounted() {
    this.autofocus && this.$refs.input.focus();
  }
};
</script>

<style lang="scss">
@import '../assets/sass/uicomponents/search.scss';
</style>
