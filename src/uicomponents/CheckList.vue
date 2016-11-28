<template>
  <div @change="$emit('change', currentValue)" class="my-checklist" :class="{ 'is-limit': max <= currentValue.length }">
    <div class="my-checklist-wrapper" v-for="option in options">
      <label class="my-checklist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="my-checkbox">
          <input
            class="my-checkbox-input"
            type="checkbox"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="my-checkbox-core"></span>
        </span>
        <span class="my-checkbox-label" v-text="option.label || option"></span>
      </label>
    </div>
  </div>
</template>

<script>
/**
 * my-checklist
 * @module uicomponents/checklist
 * @desc 复选框列表，依赖 cell 组件
 *
 * @param {(string[]|object[])} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string[]} value - 选中值的数组
 * @param {number} [max] - 最多可选的个数
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 *
 * @example
 * <my-checklist :v-model="value" :options="['a', 'b', 'c']"></my-checklist>
 */
export default {
  name: 'my-checklist',
  props: {
    max: Number,
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
