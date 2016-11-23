<template>
  <div class="pre-radiolist" @change="$emit('change', currentValue)">
    <div v-for="option in options" class="pre-radio-model">
      <label class="pre-radiolist-label">
        <span
          :class="{'is-right': align === 'right'}"
          class="pre-radio">
          <input
            class="pre-radio-input"
            type="radio"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="pre-radio-core"></span>
        </span>
        <span class="pre-radio-label" v-text="option.label || option"></span>
      </label>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'pre-radio',

  props: {
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: String
  },

  data() {
    return {
      currentValue: this.value
    };
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.$emit('input', val);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/sass/uicomponents/radio.scss";
</style>
