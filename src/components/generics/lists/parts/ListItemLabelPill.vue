<template>
  <div class="flex flex-col ml-8">
    <span class="text-xxs text-secondary-silver mb-1">Label</span>
    <span
      class="text-xxs text-secondary-silver px-3 py-0.5 border border-secondary-silver rounded-full"
      >{{ label }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'ListItemLabelPill',
  props: {
    label: {
      type: String,
      default: 'Content Pill',
    },
  },
};
</script>

<style></style>
