<template>
  <a class="pre-tab-item"
    @click="$parent.$emit('input', id)"
    :class="{ 'is-selected': $parent.value === id }">
    <div class="pre-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
export default {
  name: 'pre-nav-item',
  props: ['id']
}
</script>

<style>
.pre-tab-item{
  display: block;
  flex: 1;
}
</style>
