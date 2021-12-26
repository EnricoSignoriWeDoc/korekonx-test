<template>
  <button
    id="mobile-menu-button"
    @click.stop="toggleMobileMenu"
    class="lg:hidden"
  >
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 11H38V13H7V11ZM7 21H38V23H7V21ZM7 31H38V33H7V31Z"
        fill="#7E8387"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'MenuSvg',
  mounted() {
    document.addEventListener('click', this.toggleMobileMenu);
  },
  beforeMounted() {
    document.removeEventListener('click', this.toggleMobileMenu);
  },
  methods: {
    toggleMobileMenu() {
      const sidebar = document.querySelector('#side-nav-bar-container');
      sidebar.classList.toggle('-translate-x-full');
    },
  },
};
</script>
