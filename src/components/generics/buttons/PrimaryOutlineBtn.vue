<template>
  <button
    class="primary-outline-btn flex flex-row rounded-lg text-primary-color hover:text-primary-active"
    :class="[paddingClass]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PrimaryOutlineBtn',
  props: {
    paddingClass: {
      type: String,
      default: 'px-8 py-2.7',
    },
  },
};
</script>

<style>
.primary-outline-btn svg {
  fill: rgb(28, 54, 102);
}
.primary-outline-btn:hover svg {
  fill: rgb(0, 132, 248);
}
</style>
