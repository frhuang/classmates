<template>
  <a class="pre-cell" @click="handleClick">
    <span class="pre-cell-mask"></span>
    <div class="pre-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="pre-cell-wrapper">
      <div class="pre-cell-title">
        <slot name="title">
          <span class="pre-cell-text" v-text="title"></span>
          <span v-if="label" class="pre-cell-label" v-text="label"></span>
        </slot>
      </div>
    </div>
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

export default {
  name: 'pre-cell',
  props: ['title', 'callback'],
  methods: {
    handleClick() {
      this.callback(this.title);
    }
  }
}
</script>
<style lang="scss">
  @import "../assets/sass/uicomponents/cell.scss"
</style>
