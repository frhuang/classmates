<template>
  <a class="mint-tab-item"
    :href="href"
    @click="$parent.$emit('input', id)"
    :class="{ 'is-selected': $parent.value === id }">
    <div class="mint-tab-item-icon"><slot name="icon"></slot></div>
    <div class="mint-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
/**
 * mt-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <mt-tab-item>
 *   <img slot="icon" src="http://placehold.it/100x100">
 *   订单
 * </mt-tab-item>
 */
 function cleanPath(path) {
   return path.replace(/\/\//g, '/');
 }
 export default {
   name: 'mt-cell',

   props: {
     to: String,
     id: String
   },
   computed: {
     href() {
       let href;

       if (this.$router && this.to) {
         const base = this.$router.history.base;
         const resolved = this.$router.match(this.to);
         const fullPath = resolved.redirectedFrom || resolved.fullPath;

         href = base ? cleanPath(base + fullPath) : fullPath;
       } else {
         href = this.to;
       }

       if (href && !this.added && this.$router) {
         this.$nextTick(() => {
           this.added = true;
           this.$el.addEventListener('click', this.handleClick);
         });
       }
       return href;
     }
   },

   methods: {
     handleClick($event) {
       $event.preventDefault();
       this.$router.push(this.href);
     }
   }
 };
</script>
