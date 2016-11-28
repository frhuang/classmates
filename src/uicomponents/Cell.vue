<template>
  <a class="my-cell" :href="href">
    <span class="my-cell-mask"></span>
    <div class="my-cell-wrapper">
      <div class="my-cell-title">
        <slot name="title">
          <span class="red-title" v-if="required">*</span><span class="my-cell-text" v-text="title"></span>
        </slot>
      </div>
      <div class="my-cell-value" :class="{ 'is-link' : isLink }">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
    </div>
    <div class="my-cell-right">
      <slot name="right"></slot>
    </div>
    <i class="my-cell-allow-right" v-if="isLink"></i>
  </a>
</template>

<script type="text/babel">
/**
 * sx-cell
 * @module uicomponents/cell
 * @desc 单元格
 * @param {string} [to] - 跳转链接
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 *
 * @example
 * <my-cell title="标题文字" is-link value="描述文字"></my-cell>
 */
 function cleanPath(path) {
   return path.replace(/\/\//g, '/');
 }
export default {
  name: 'my-cell',
  props: {
    to: String,
    title: String ,
    required: Boolean,
    isLink: Boolean,
    callback: Function,
    value: {}
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
}
</script>
<style lang="scss">
  @import "../assets/sass/uicomponents/cell.scss"
</style>
