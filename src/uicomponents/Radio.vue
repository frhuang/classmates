<template>
  <div class="my-radiolist" @change="$emit('change', currentValue)">
    <div v-for="option in options" class="my-radio-model">
      <label class="my-radiolist-label">
        <span
          :class="{'is-right': align === 'right'}"
          class="my-radio">
          <input
            class="my-radio-input"
            type="radio"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
            <span class="my-radio-label" v-text="option.label || option">
            </span>
        </span>
      </label>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'my-radio',

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
