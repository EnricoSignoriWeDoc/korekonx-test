<template>
  <PrimaryBtn
    :class="[disabled ? 'disable-button' : '', 'ml-4']"
    :disabled="disabled"
  >
    Next
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      class="mr-2"
    >
      <path
        d="M10.707 18.207L16.414 12.5L10.707 6.79303L9.29303 8.20703L13.586 12.5L9.29303 16.793L10.707 18.207Z"
      />
    </svg>
  </PrimaryBtn>
</template>

<script>
import PrimaryBtn from '@/components/generics/buttons/PrimaryBtn.vue';

export default {
  name: 'PaginationNextBtn',
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
