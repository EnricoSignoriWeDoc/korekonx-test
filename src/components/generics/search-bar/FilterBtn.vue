<template>
  <PrimaryOutlineBtn>
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      class="mr-2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 11.5H17V13.5H7V11.5ZM4 7.5H20V9.5H4V7.5ZM10 15.5H14V17.5H10V15.5Z"
      />
    </svg>
    Filter
  </PrimaryOutlineBtn>
</template>

<script>
import PrimaryOutlineBtn from '@/components/generics/buttons/PrimaryOutlineBtn.vue';

export default {
  name: 'FilterBtn',
  components: {
    PrimaryOutlineBtn,
  },
};
</script>
