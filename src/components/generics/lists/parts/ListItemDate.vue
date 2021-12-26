<template>
  <div class="flex flex-col">
    <span class="text-xxs text-secondary-silver mb-1">Date</span>
    <span class="text-base text-primary-active font-medium">{{ date }}</span>
  </div>
</template>

<script>
export default {
  name: 'ListItemDate',
  props: {
    date: {
      type: String,
      default: '2021-04-04',
    },
  },
};
</script>

<style></style>
