<template>
  <div
    class="w-full flex flex-row items-center justify-center xl:justify-between p-8"
  >
    <span class="hidden xl:flex text-base text-secondary-silver"
      >Showing 12 from 24 'entryNameHere'</span
    >
    <PaginationContainer
      :currentPage="currentPage"
      :pagesCount="pagesCount"
      :pagesDisplay="pagesDisplay"
    />
  </div>
</template>

<script>
import PaginationContainer from '@/components/generics/pagination/PaginationContainer.vue';

export default {
  name: 'HomeBottomPagination',
  props: {
    pagesCount: {
      type: Number,
      default: 5,
    },
    pagesDisplay: {
      type: Number,
      default: 5,
    },
    limit: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    currentPage() {
      return 1;
    },
  },
  components: {
    PaginationContainer,
  },
};
</script>
