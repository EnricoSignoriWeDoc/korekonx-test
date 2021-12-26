<template>
  <div :class="[isSideBar ? 'pt-8 pb-6 px-6 default-shadow' : '']">
    <div v-if="isSideBar" class="mb-8">
      <SideNavBarKoreconx />
    </div>
    <button :class="[isSideBar ? 'w-full' : '']">
      <div
        :class="[isSideBar ? 'border border-light-blue rounded-lg' : '']"
        class="flex justify-between"
      >
        <div class="flex items-center">
          <div class="w-12 my-2 mx-2">
            <img
              :src="picture"
              class="border border-light-blue rounded-md w-12 h-12"
            />
          </div>
          <div class="flex flex-col">
            <span class="text-primary-color text-base text-left">{{
              userName
            }}</span>
            <span
              v-if="isSideBar"
              class="bg-secondary-green rounded-full px-3 text-white text-xxs"
              >Personal Dashboard</span
            >
          </div>
        </div>
        <div class="flex items-center">
          <span class="mx-3.5">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.293 0.29303L6.00003 4.58603L1.70703 0.29303L0.29303 1.70703L6.00003 7.41403L11.707 1.70703L10.293 0.29303Z"
                fill="#4B5054"
              />
            </svg>
          </span>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
import SideNavBarKoreconx from './SideNavBarKoreconx.vue';

export default {
  name: 'SideNavBarProfile',
  props: {
    initialUserName: {
      type: String,
    },
    initialUserPicture: {
      type: String,
    },
    isSideBar: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      userName: this.initialUserName || 'Michael Scott',
    };
  },
  components: {
    SideNavBarKoreconx,
  },
  computed: {
    picture() {
      var callBackImg = require('@/assets/profile-image/image.png');
      return this.initialUserPicture || callBackImg;
    },
  },
};
</script>

<style></style>
