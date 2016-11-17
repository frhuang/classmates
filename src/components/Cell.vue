<template>
  <a class="sx-cell">
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

</style>
