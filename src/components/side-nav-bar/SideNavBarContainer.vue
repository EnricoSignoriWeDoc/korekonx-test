<template>
  <div
    id="side-nav-bar-container"
    class="absolute inset-y-0 left-0 transform -translate-x-full lg:translate-x-0 transition duration-200 ease-in-out lg:h-screen lg:fixed left-0 top-0 lg:flex lg:flex-col lg:w-90 overflow-y-auto bg-white default-shadow"
  >
    <!-- Profile Component -->
    <SideNavBarProfile />

    <!-- Nav Items Components -->
    <nav id="nav" class="mt-8 grow">
      <ul>
        <SideNavBarItem
          v-for="navItem in navItems"
          :key="navItem"
          :routeTo="navItem"
          :title="navItem"
        />
      </ul>
    </nav>

    <SideNavBarFooter />
  </div>
</template>

<script>
import SideNavBarProfile from './SideNavBarProfile.vue';
import SideNavBarItem from './SideNavBarItem.vue';
import SideNavBarFooter from './SivNavBarFooter.vue';

const navItems = [
  'Home',
  'Portfolio',
  'KoreTeam',
  'KorePartner',
  'Compliance',
  'KoreNode',
];

export default {
  name: 'SideNavBarContainer',
  data() {
    return {
      navItems: navItems,
    };
  },
  components: {
    SideNavBarProfile,
    SideNavBarItem,
    SideNavBarFooter,
  },
};
</script>

<style></style>
