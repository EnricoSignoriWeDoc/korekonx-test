<template>
  <div class="bg-default-grey h-screen w-screen">
    <div class="flex flex-col max-h-screen">
      <TopNavBarContainer />
      <router-view />
    </div>
    <SideNavBarContainer />
  </div>
</template>

<script>
import SideNavBarContainer from './components/side-nav-bar/SideNavBarContainer.vue';
import TopNavBarContainer from './components/top-nav-bar/TopNavBarContainer.vue';

export default {
  name: 'App',
  components: {
    SideNavBarContainer,
    TopNavBarContainer,
  },
};
</script>

<style>
body {
  background-color: #e5e5e5;
}
.default-shadow {
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
}
.default-inverted-shadow {
  box-shadow: 0px -4px 4px rgba(51, 51, 51, 0.04),
    0px -4px 16px rgba(51, 51, 51, 0.08);
}
.neutral-shadow {
  box-shadow: 0px 2px 0px #c9d6df;
}
.neutral-active-shadow {
  box-shadow: 0px 2px 0px #0084f8;
}
.grow {
  flex-grow: 1;
}
button:disabled.disable-button {
  opacity: 0.3;
}
</style>
