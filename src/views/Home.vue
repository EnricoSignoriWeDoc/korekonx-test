<template>
  <div class="lg:ml-90 py-4 px-22 h-full grow">
    <div
      class="container max-w-fit mx-auto flex flex-col justify-center items-center bg-white rounded-2xl default-shadow"
    >
      <HomeTopHeader />
      <TabsNavigation />
      <SearchBarContainer />
      <ListContainer />
      <HomeBottomPagination />
    </div>
  </div>
</template>

<script>
import HomeTopHeader from '@/components/home-page/HomeTopHeader.vue';
import TabsNavigation from '@/components/generics/tabs/TabsNavigation.vue';
import SearchBarContainer from '@/components/generics/search-bar/SearchBarContainer.vue';
import ListContainer from '@/components/generics/lists/ListContainer.vue';
import HomeBottomPagination from '@/components/home-page/HomeBottomPagination.vue';

export default {
  name: 'Home',
  components: {
    HomeTopHeader,
    TabsNavigation,
    SearchBarContainer,
    ListContainer,
    HomeBottomPagination,
  },
};
</script>
