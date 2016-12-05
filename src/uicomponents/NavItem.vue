<template>
  <a class="my-nav-item"
    @click="$parent.$emit('input', id)"
    :class="{ 'is-selected': $parent.value === id }">
    <div class="my-nav-item-label"><slot></slot></div>
  </a>
</template>

<script>
export default {
  name: 'my-nav-item',
  props: ['id']
}
</script>
