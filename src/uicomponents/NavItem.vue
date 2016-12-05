<template>
  <a class="my-tab-item"
    @click="$parent.$emit('input', id)"
    :class="{ 'is-selected': $parent.value === id }">
    <div class="my-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
export default {
  name: 'my-nav-item',
  props: ['id']
}
</script>
