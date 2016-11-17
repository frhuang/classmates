<template>
  <div class="hello">
    <h1>mint-de</h1>
    <mt-button
      type="primary"
      @click="sheetVisible = true">
      选择操作
    </mt-button>
  </div>
</template>

<script>
  import { Toast, MessageBox } from 'mint-ui';
  export default {
    name: 'hello',
    data() {
      return {
        sheetVisible: false,
        actions: [{
          name: '展示 Toast',
          method: this.showToast
        }, {
          name: '展示 Message Box',
          method: this.showMsgbox
        }]
      };
    },
    methods: {
      showToast() {
        Toast('这是一个 Toast');
      },

      showMsgbox() {
        MessageBox('提示', '这是一个 Message Box');
      }
    }
  };
</script>
