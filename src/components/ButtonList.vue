<script setup>
import draggable from 'vuedraggable';
import useDisplayStore from '../stores/DisplayStore.js';
import useButtonStore from '../stores/ButtonStore.js';

const displayStore = useDisplayStore();
const buttonStore = useButtonStore();
const body = document.body;

const onEnd = (evt) => {
  if (evt.from.innerHTML.trim() === '') {
    evt.from.parentElement.classList.add('hidden');
  }
};
</script>
<template>
  <div class="flex w-full gap-2">
    <div class="flex w-full flex-col gap-2">
      <draggable
        v-model="buttonStore.buttons"
        itemKey="row"
        handle=".handle"
        tag="div"
        :animation="300"
        class="flex w-full flex-wrap justify-between gap-2"
      >
        <template #item="{ element: row, index: rowIndex }">
          <div class="check flex min-h-[40px] w-full justify-between gap-2">
            <draggable
              :list="row"
              itemKey="buttons"
              handle=".handle"
              :animation="300"
              group="buttons"
              @end="onEnd"
              class="flex w-full justify-between gap-2"
            >
              <template #item="{ element: button, index: buttonIndex }">
                <button
                  @click="
                    displayStore.toggleElement('addColumn'),
                      buttonStore.selectCurrentButton(button)
                  "
                  :key="button.id"
                  :button="button"
                  class="handle w-full truncate rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-100 hover:text-indigo-700 focus:outline-none focus:ring-0 sm:text-base"
                >
                  {{ button.name }}
                </button>
              </template>
            </draggable>
            <button
              v-if="buttonStore.isAddColumnBtnVisible(rowIndex)"
              @click="
                displayStore.toggleElement('addColumn'),
                  buttonStore.toggleAddColumnBtn(rowIndex),
                  body.classList.toggle('overflow-hidden')
              "
              class="add-column-btn rounded-lg border border-dashed border-gray-300 px-3 transition hover:border-gray-500 hover:text-gray-500 focus:outline-none focus-visible:border-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="h-5 w-5 text-gray-400 group-hover:text-gray-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m6-6H6"
                ></path>
              </svg>
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              @end="onEnd"
              class="handle w-6 cursor-move text-gray-400 group-hover:text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              ></path>
            </svg>
          </div>
        </template>
      </draggable>
    </div>
  </div>
  <!-- <div class="flex w-full gap-2">
    <div class="flex w-full gap-2 flex-col">
      <div
        v-for="(row, rowIndex) in buttonStore.buttons"
        :key="rowIndex"
        @drop="buttonStore.handleDrop(rowIndex)"
        @dragover="(event) => buttonStore.handleDragOver(event, rowIndex)"
        class="check flex justify-between w-full gap-2 flex-wrap"
      >
        <div
          v-for="button in row"
          :key="button.id"
          class="btn-element flex justify-between flex-wrap w-full gap-2 overflow-hidden"
        >
          <button
            @click="
              displayStore.toggleElement('addColumn'),
                buttonStore.selectCurrentButton(button)
            "
            :draggable="true"
            @dragstart="buttonStore.startDrag(button, rowIndex)"
            class="w-full rounded-lg text-xs sm:text-base font-semibold text-indigo-600 bg-indigo-50 px-3 py-2 hover:bg-indigo-100 hover:text-indigo-700 focus:outline-none focus:ring-0 transition truncate"
          >
            {{ button.name }}
          </button>
        </div>
        <button
          v-if="buttonStore.isAddColumnBtnVisible(rowIndex)"
          @click="
            displayStore.toggleElement('addColumn'),
              buttonStore.toggleAddColumnBtn(rowIndex),
              body.classList.toggle('overflow-hidden')
          "
          class="add-column-btn border border-dashed border-gray-300 hover:border-gray-500 hover:text-gray-500 px-3 rounded-lg focus:outline-none focus-visible:border-indigo-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="text-gray-400 w-5 h-5 group-hover:text-gray-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            ></path>
          </svg>
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class="w-6 text-gray-400 group-hover:text-gray-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          ></path>
        </svg>
      </div>
    </div>
  </div> -->
</template>
