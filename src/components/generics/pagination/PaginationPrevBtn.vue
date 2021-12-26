<template>
  <PrimaryBtn
    :class="[disabled ? 'disable-button' : '', 'mr-4']"
    :disabled="disabled"
  >
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      class="mr-2"
    >
      <path
        d="M13.293 6.79303L7.586 12.5L13.293 18.207L14.707 16.793L10.414 12.5L14.707 8.20703L13.293 6.79303Z"
      />
    </svg>
    Previous
  </PrimaryBtn>
</template>

<script>
import PrimaryBtn from '@/components/generics/buttons/PrimaryBtn.vue';

export default {
  name: 'PaginationPrevBtn',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    PrimaryBtn,
  },
};
</script>
