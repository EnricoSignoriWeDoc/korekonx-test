<template>
  <button
    class="primary-btn px-8 py-2.7 flex flex-row border border-primary-color rounded-lg hover:border-primary-active hover:bg-primary-active hover:text-white"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PrimaryBtn',
};
</script>

<style>
.primary-btn svg {
  fill: rgb(28, 54, 102);
}
.primary-btn:hover svg {
  fill: white;
}
</style>
