<template>
  <PrimaryOutlineBtn paddingClass="pl-8 py-2.7">
    Details
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      class="ml-2"
    >
      <path
        d="M16.293 9.29303L12 13.586L7.70703 9.29303L6.29303 10.707L12 16.414L17.707 10.707L16.293 9.29303Z"
      />
    </svg>
  </PrimaryOutlineBtn>
</template>

<script>
import PrimaryOutlineBtn from '@/components/generics/buttons/PrimaryOutlineBtn.vue';

export default {
  name: 'ListItemDetailBtn',
  components: {
    PrimaryOutlineBtn,
  },
};
</script>
