<template>
  <a class="my-cell" @click="handleClick">
    <span class="my-cell-mask"></span>
    <div class="my-cell-wrapper">
      <div class="my-cell-title">
        <slot name="title">
          <span class="red-title" v-if="required">*</span><span class="my-cell-text" v-text="title"></span>
        </slot>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'callback-cell',
    props: {
      title: String,
      id: String,
      callback: Function
    },
    methods: {
      handleClick() {
        this.callback(this.title, this.id)
      }
    }
  }
</script>
