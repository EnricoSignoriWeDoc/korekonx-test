<template>
  <div class="w-full overflow-x-auto pb-0.5">
    <nav
      class="w-full h-17 flex flex-row justify-between bg-default-neutral neutral-shadow"
    >
      <button
        class="h-full px-16 text-base font-bold hover:text-primary-active"
        v-for="(tabCount, index) in tabsCount"
        :key="tabCount"
        :class="[
          currentTab === index + 1
            ? 'text-primary-active neutral-active-shadow'
            : 'neutral-shadow text-primary-color',
        ]"
      >
        Tab
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TabsNavigation',
  props: {
    currentTab: {
      type: Number,
      default: 1,
    },
    tabsCount: {
      type: Number,
      default: 7,
    },
  },
};
</script>

<style></style>
