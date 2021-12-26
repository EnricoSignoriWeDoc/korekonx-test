<template>
  <button
    class="secondary-btn px-8 py-2.7 flex flex-row rounded-lg text-white bg-primary-color hover:bg-primary-active"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'SecondaryBtn',
};
</script>

<style>
.secondary-btn svg {
  fill: white;
}
</style>
