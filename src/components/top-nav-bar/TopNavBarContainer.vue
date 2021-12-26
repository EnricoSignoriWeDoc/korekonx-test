<template>
  <nav class="lg:ml-90 py-4 px-22">
    <div class="container max-w-fit mx-auto flex items-center justify-between">
      <div class="flex justify-between items-center w-full">
        <h4 class="hidden lg:block text-primary-color text-2xl">
          Breadcrumb Label
        </h4>
        <div class="flex flex-row items-center">
          <MessageSVG />
          <div class="ml-2"></div>
          <NotificationSVG />
          <div class="custom-divider bg-light-blue h-8 mx-6"></div>
          <TopNavBarProfile :isSideBar="false" />
        </div>
        <MenuSVG />
      </div>
    </div>
  </nav>
  <TopNavBarBackBtn />
</template>

<script>
import MenuSVG from './svg/MenuSVG.vue';
import MessageSVG from './svg/MessageSVG.vue';
import NotificationSVG from './svg/NotificationSVG.vue';
import TopNavBarProfile from '../side-nav-bar/SideNavBarProfile.vue';
import TopNavBarBackBtn from './TopNavBarBackBtn.vue';

export default {
  components: {
    MenuSVG,
    MessageSVG,
    NotificationSVG,
    TopNavBarProfile,
    TopNavBarBackBtn,
  },
};
</script>

<style scoped>
.custom-divider {
  width: 1px;
  padding-top: 1px;
  padding-bottom: 1px;
}
</style>
