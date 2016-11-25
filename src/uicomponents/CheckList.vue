<template>
  <div @change="$emit('change', currentValue)" class="pre-checklist" :class="{ 'is-limit': max <= currentValue.length }">
    <label class="pre-checklist-title" v-text="title"></label>
    <mt-cell v-for="option in options">
      <label class="pre-checklist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="pre-checkbox">
          <input
            class="pre-checkbox-input"
            type="checkbox"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="pre-checkbox-core"></span>
        </span>
        <span class="pre-checkbox-label" v-text="option.label || option"></span>
      </label>
    </mt-cell>
  </div>
</template>
<script>
export default {
  name: 'pre-checklist',
  props: {
    max: Number,
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: Array
  },
  data() {
    return {
      currentValue: this.value
    };
  },

  computed: {
    limit() {
      return this.max < this.currentValue.length;
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      if (this.limit) val.pop();
      this.$emit('input', val);
    }
  }
};
</script>
<style lang="scss">
@import "../assets/sass/uicomponents/checklist.scss";
</style>
