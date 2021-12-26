<template>
  <div class="flex flex-row items-center">
    <PaginationPrevBtn :disabled="currentPage === 1" />
    <!-- @click="currentPage > 0 ? (currentPage -= 1) : ''" -->
    <div
      class="hidden xl:flex xl:flex-row xl:items-center bg-secondary-accent rounded-lg"
    >
      <PaginationNumericBtn
        v-for="(pageDisplay, index) in pagesDisplay"
        :key="index + 1"
        :number="index + 1"
        :active="index + 1 === currentPage"
      />
    </div>
    <PaginationNextBtn :disabled="currentPage === pagesCount" />
    <!-- @click="currentPage <= pagesCount ? (currentPage += 1) : ''" -->
  </div>
</template>

<script>
import PaginationPrevBtn from './PaginationPrevBtn.vue';
import PaginationNumericBtn from './PaginationNumericBtn.vue';
import PaginationNextBtn from './PaginationNextBtn.vue';

export default {
  name: 'PaginationContainer',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    pagesCount: {
      type: Number,
      default: 5,
    },
    pagesDisplay: {
      type: Number,
      default: 5,
    },
  },
  components: {
    PaginationPrevBtn,
    PaginationNumericBtn,
    PaginationNextBtn,
  },
};
</script>

<style></style>
