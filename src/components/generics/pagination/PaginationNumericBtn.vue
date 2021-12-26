<template>
  <button
    :class="[active ? 'bg-primary-active text-white' : 'text-tertiary-content']"
    class="px-5 py-2.7 rounded-lg"
  >
    {{ number }}
  </button>
</template>

<script>
export default {
  name: 'PaginationNumericBtn',
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    number: {
      type: Number,
      default: 0,
    },
  },
};
</script>
