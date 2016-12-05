<template>
  <transition name="actionsheet-float">
    <div v-show="currentValue" class="my-actionsheet">
      <ul class="my-actionsheet-list">
        <li v-for="item in actions" class="my-actionsheet-listitem" @click="itemClick(item)">{{ item.name }}</li>
      </ul>
    </div>
  </transition>
</template>

<style lang="scss">
@import "../assets/sass/uicomponents/actionsheet.scss";
.actionsheet-float-enter,
.actionsheet-float-leave-active {
  transform: translate3d(-50%, 100%, 0);
}
</style>

<script type="text/babel">
  import Popup from 'vue-popup';
  import 'vue-popup/lib/popup.css';

  export default {
    name: 'my-actionsheet',

    mixins: [Popup],

    props: {
      modal: {
        default: true
      },

      modalFade: {
        default: false
      },

      lockScroll: {
        default: false
      },

      closeOnClickModal: {
        default: true
      },

      cancelText: {
        type: String,
        default: '取消'
      },

      actions: {
        type: Array,
        default: () => []
      }
    },

    data() {
      return {
        currentValue: false
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

    methods: {
      itemClick(item) {
        if (item.method && typeof item.method === 'function') {
          item.method();
        }
        this.currentValue = false;
      }
    },

    mounted() {
      if (this.value) {
        this.rendered = true;
        this.currentValue = true;
        this.open();
      }
    }
  };
</script>
