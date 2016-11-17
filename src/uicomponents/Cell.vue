<template>
  <a class="sx-cell">
    <span class="sx-cell-mask" v-if="isLink"></span>
    <div class="sx-cell-wrapper">
      <div class="sx-cell-title">
        <slot name="title">
          <span v-text="title"></span>
        </slot>
      </div>
      <div class="sx-cell-value">
        <slot name="value">
          <span v-text="value"></span>
        </slot>
      </div>
    </div>
    <i v-if="isLink" class="sx-cell-arrow"></i>
  </a>
</template>

<script type="text/babel">
/**
 * sx-cell
 * @module components/cell
 * @desc 单元格
 * @param {string} [to] - 跳转链接
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <mt-cell title="标题文字" icon="back" is-link value="描述文字"></mt-cell>
 * <mt-cell title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </mt-cell>
 */
function clearPath(path) {
  return path.replace(/\/\//g, '/');
}
export default {
  name: 'sx-cell',
  props: {
    to: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  },
  computed: {
    href() {
      let href;

      if (this.$router && this.to) {
        const base = this.$router.history.base;
        const resolved = this.$router.match(this.to);
        const fullPath = resolved.redirectedForm || resolved.fullPath;

        href = base ? clearPath(base + fullPath) : fullPath;
      } else {
        href = this.to;
      }

      if (href && !this.added && this.$router) {
        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', this.handleClick)
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
