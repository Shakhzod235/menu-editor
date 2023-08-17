<script setup>
  import { computed } from 'vue';

  import useDisplayStore from '../stores/DisplayStore.js';
  import useButtonStore from '../stores/ButtonStore.js';
  
  const displayStore = useDisplayStore();
  const buttonStore = useButtonStore();
  
  const body = document.body;
  
  const isAddColumnBtnVisible = computed(() => {
    const maxButtonsPerRow = 3;

    const totalButtonCount = buttonStore.buttons.reduce((total, row) => total + row.length, 0);

    return totalButtonCount % maxButtonsPerRow !== 0;
  });
</script>
<template>
  <div class="flex w-full gap-2">
    <div class="flex w-full gap-2 flex-col">
      <div v-for="(row, rowIndex) in buttonStore.buttons" class="flex justify-between w-full gap-2 flex-wrap">
        <div v-for="(button, buttonIndex) in row" :key="button.id" class="btn-element flex justify-between flex-wrap w-full gap-2">
          <button class="w-full rounded-lg text-xs sm:text-base font-semibold text-indigo-600 bg-indigo-50 px-3 py-2 hover:bg-indigo-100 hover:text-indigo-700 focus:outline-none focus:ring-0 transition truncate">
            {{ button.name }}
          </button>
        </div>
        <button v-if="isAddColumnBtnVisible" @click="displayStore.toggleElement(), buttonStore.toggleColumnBtnClicked(), body.classList.toggle('overflow-hidden')" class="add-column-btn border border-dashed border-gray-300 hover:border-gray-500 hover:text-gray-500 px-3 rounded-lg focus:outline-none focus-visible:border-indigo-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="text-gray-400 w-5 h-5 group-hover:text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
          </svg>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-6 text-gray-400 group-hover:text-gray-600">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

