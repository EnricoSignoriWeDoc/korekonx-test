<template>
  <div class="w-full flex-initial overflow-y-auto grid grid-cols-1 pt-8 px-8">
    <ListItem v-for="index in 10" :key="index" />
  </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  name: 'ListContainer',
  components: {
    ListItem,
  },
};
</script>
