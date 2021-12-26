<template>
  <li class="h-12 items-center w-full mb-2">
    <!-- <li class="h-12 items-center w-full"> -->
    <router-link
      :to="{ name: routeTo }"
      class="flex items-center roboto text-base mx-6 rounded-x"
    >
      <SideNavBarItemSVG :svgToLoad="title" />
      <span class="my-3 grow">{{ title }}</span>
    </router-link>
  </li>
</template>

<script>
import SideNavBarItemSVG from './SideNavBarItemSVG.vue';

export default {
  name: 'SideNavBarItem',
  props: {
    routeTo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    SideNavBarItemSVG,
  },
};
</script>

<style scoped>
#nav li a,
#nav li a span {
  color: #52616b;
}
#nav li a svg {
  fill: rgb(82, 97, 107);
}
#nav li:hover a {
  background-color: #f1f2f4;
}
#nav li a.router-link-exact-active,
#nav li a.router-link-exact-active span {
  color: rgb(0, 132, 248);
  background-color: #f1f2f4;
}
#nav li a.router-link-exact-active:after {
  width: 0;
  height: 0;
  border-top: 11.31px solid transparent;
  border-bottom: 11.31px solid transparent;
  border-right: 11.31px solid #0084f8;
  content: '';
  position: absolute;
  right: -1px;
}
</style>
<style>
#nav li a.router-link-exact-active svg {
  fill: rgb(0, 132, 248);
}
#nav li a svg {
  fill: rgb(82, 97, 107);
}
</style>
