<script setup>
  import useDisplayStore from '../stores/DisplayStore.js';
  const displayStore = useDisplayStore();
</script>
<template>
  <div v-if="displayStore.isElementVisible" @click="displayStore.toggleElement()" class="fixed flex flex-col justify-center items-center inset-0 overflow-y-auto py-6 z-30">
    <div @click.stop class="rounded-lg transition-all overflow-hidden w-[650px] shadow-xl">
      <slot></slot>
    </div>
  </div>
</template>
