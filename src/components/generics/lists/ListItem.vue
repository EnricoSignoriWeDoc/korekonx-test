<template>
  <div
    class="list-item-spacing w-full h-27 flex flex-row p-4 items-center justify-between border border-list-item-color rounded-2xl overflow-x-auto overflow-y-hidden"
  >
    <ListItemDate />
    <div class="flex flex-row items-center justify-between grow">
      <ListItemContent v-for="index in 3" :key="index" />
    </div>
    <ListItemLabelPill />
    <ListItemDetailBtn />
  </div>
</template>

<script>
import ListItemDate from './parts/ListItemDate.vue';
import ListItemContent from './parts/ListItemContent.vue';
import ListItemLabelPill from '@/components/generics/lists/parts/ListItemLabelPill.vue';
import ListItemDetailBtn from './parts/ListItemDetailBtn.vue';

export default {
  name: 'ListItem',
  components: {
    ListItemDate,
    ListItemContent,
    ListItemLabelPill,
    ListItemDetailBtn,
  },
};
</script>

<style>
.list-item-spacing + .list-item-spacing {
  margin-top: 0.5rem;
}
</style>
