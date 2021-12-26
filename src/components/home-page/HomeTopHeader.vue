<template>
  <div class="w-full flex flex-row items-center justify-between p-8">
    <h1 class="text-3.5xl">Heading</h1>
    <PrimaryBtn>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        xmlns="http://www.w3.org/2000/svg"
        class="mr-2"
      >
        <path d="M12 16.5L16 11.5H13V4.5H11V11.5H8L12 16.5Z" />
        <path
          d="M20 18.5H4V11.5H2V18.5C2 19.603 2.897 20.5 4 20.5H20C21.103 20.5 22 19.603 22 18.5V11.5H20V18.5Z"
        />
      </svg>
      Button
    </PrimaryBtn>
  </div>
</template>

<script>
import PrimaryBtn from '@/components/generics/buttons/PrimaryBtn.vue';
export default {
  name: 'HomeTopHeader',
  components: {
    PrimaryBtn,
  },
};
</script>
