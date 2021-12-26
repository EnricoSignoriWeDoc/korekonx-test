<template>
  <div class="w-full flex flex-row items-center justify-between pt-8 px-8">
    <SearchBar />
    <FilterBtn />
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import FilterBtn from './FilterBtn.vue';

export default {
  name: 'SearchBarContainer',
  components: {
    SearchBar,
    FilterBtn,
  },
};
</script>

<style></style>
