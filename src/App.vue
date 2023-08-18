<script setup>
  import ButtonList from './components/ButtonList.vue';

  import useDisplayStore from './stores/DisplayStore.js';
  import useButtonStore from './stores/ButtonStore.js';

  const displayStore = useDisplayStore();
  const buttonStore = useButtonStore();

  const body = document.body;

  const checkEmptyInput = () => {
    const inputIsEmpty = buttonStore.newButton.name.trim() === '';
    buttonStore.isSaveBtnDisabled = inputIsEmpty;
  }
</script>
<template>
  <main>
    <section>
      <div class="container m-auto px-4 lg:max-w-screen-xl">
        <div class="flex my-10">
          <div class="flex justify-center flex-1 flex-basis-0">
            <div class="flex flex-col justify-end gap-2 rounded-lg bg-white w-full border border-zinc-300 shadow-sm p-4">
              <p class="font-medium text-xs md:text-sm text-gray-500">Кнопки</p>
              <ButtonList />
              <div class="pr-7">
                <button @click="displayStore.toggleElement(), buttonStore.toggleRowBtnClicked(), body.classList.toggle('overflow-hidden')" class="w-full rounded-lg border border-dashed border-gray-300 bg-white hover:border-gray-500 font-semibold flex justify-center items-center text-xs sm:text-base text-indigo-600 bg-indigo-40 px-3 py-2 focus:outline-none focus:ring-0 transition truncate">
                  <span class="w-full flex justify-center items-center text-gray-400 hover:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4 sm:w-5 items-center group-hover:text-gray-600">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
                    </svg>
                    Добавить ряд
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="flex-1 flex-basis-0 h-[750px] relative">
            <div class="phone-preview relative bg-no-repeat bg-center h-full bg-[url('//quo.asay.me/files/images/preview/phone-preview1.png')] bg-[length:493px_749px] p-4">
              <div class="flex flex-col justify-between translate-x-0.5 w-80 m-auto h-[687px]">
                <div class="pt-8 mx-4 z-10">
                  <div class="flex justify-between items-center w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7 text-slate-700">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                    </svg>
                    <p class="text-white font-medium text-xl">Name Bot</p>
                    <span class="flex justify-center items-center w-10 h-10 rounded-full bg-gradient-to-b from-white via-violet-400 to-violet-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="text-white w-6 h-6">
                        <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z"></path><path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex flex-col gap-2">
                    <p class="rounded-2xl bg-gray-900/75 p-3 mx-3 w-72 break-words text-white">Ресурс добавлен в список!</p>
                    <div class="flex flex-col pb-2 w-72 mx-3 cursor-input">
                      <div class="flex w-full gap-2">
                        <div class="flex w-full gap-2 flex-col">
                          <div v-for="row in buttonStore.buttons" class="check flex justify-between w-full gap-1 flex-wrap">
                            <div v-for="button in row" :key="button.id" class="btn-element flex justify-between flex-wrap w-full gap-2 overflow-hidden">
                              <button class="bg-black/50 flex-1 p-3 rounded-lg text-center whitespace-nowrap overflow-hidden text-ellipsis text-white cursor-default">
                                {{ button.name }}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <div class="flex justify-between py-2 px-3 w-full bg-gray-900 rounded-b-2xl">
                      <div class="w-full bg-slate-800 rounded-full my-0.5"></div>
                      <span class="ml-3 inline-flex w-12 h-10 items-center justify-center rounded-full bg-slate-800">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-indigo-400">
                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute left-0 top-0 lg:mx-auto flex h-full bg-no-repeat bg-center bg-[length:493px_749px] w-full py-3 flex-col justify-between rounded-xl pointer-events-none bg-[url('//quo.asay.me/files/images/preview/phone-preview2.png')]"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <div v-if="displayStore.isElementVisible" @click="displayStore.toggleElement()" class="fixed flex flex-col justify-center items-center inset-0 overflow-y-auto py-6 z-30">
    <div @click.stop class="rounded-lg transition-all overflow-hidden w-[650px] shadow-xl">
      <div class="flex flex-col items-start px-6 py-4 bg-white gap-4">
        <p class="text-lg text-gray-500">Редактирование</p>
        <div class="flex flex-col items-start w-full">
          <div class="w-full">
            <label class="font-medium text-xs md:text-sm text-gray-500" for="input-name">
              <span>Название</span>
            </label>
            <input v-model="buttonStore.newButton.name" id="input-name" @input="checkEmptyInput" class="input input-name w-full text-xs md:text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 px-2 disabled:bg-neutral-100" type="text">
          </div>
          <div class="w-full">
            <label class="font-medium text-xs md:text-sm text-gray-500" for="input-value">
              <span>Значение</span>
            </label>
            <input v-model="buttonStore.newButton.value" id="input-value" class="input w-full text-xs md:text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 px-2 disabled:bg-neutral-100" type="text">
          </div>
        </div>
      </div>
      <div class="flex justify-end items-center py-4 px-6 bg-gray-100 gap-2">
        <button @click="displayStore.toggleElement(), buttonStore.deleteButton()" :disabled="buttonStore.handleSingleButton()" type="submit" class="delete-btn px-4 py-1 uppercase bg-red-600 border border-transparent rounded-md font-normal text-xs sm:text-sm transition hover:bg-red-500 text-white">Удалить</button>
        <button @click="displayStore.toggleElement(), body.classList.remove('overflow-hidden')" type="button" class="px-4 py-1 uppercase bg-white border border-zinc-400 rounded-md font-normal text-xs text-zinc-500 hover:shadow-sm hover:text-zinc-700 focus:outline-none sm:text-sm active:text-zinc-800 active:bg-gray-50 disabled:opacity-25 transition hover:border-zinc-500 focus-visible:border-indigo-500">Отмена</button>
        <button @click="displayStore.toggleElement(), buttonStore.addRowButton(), body.classList.remove('overflow-hidden')" :disabled="buttonStore.isSaveBtnDisabled" type="submit" id="save-btn" class="save-btn px-4 py-1 uppercase rounded-md bg-indigo-500 hover:bg-indigo-600 text-white border border-transparent font-normal text-xs sm:text-sm disabled:opacity-25 transition focus:outline-none focus-visible:border-indigo-600">Сохранить</button>
      </div>
    </div>
  </div>
  <div v-if="displayStore.isElementVisible" class="fixed inset-0 bg-gray-500 opacity-75 w-full h-full z-20"></div>
</template>
<style lang="css">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #f1f5f9;
  }
  .phone-preview::before {
    content: '';
    position: absolute;
    top: 21px;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    left: calc(50% - 164px);
    width: 331px;
    height: 76px;
    background-color: rgb(15, 23, 42);
  }
  .btn-element {
    flex: 1 0 calc(33.33% - 35px);
  }
  .delete-btn:disabled {
    background-color: brown;
  }
  .delete-btn:disabled:hover {
    background-color: brown;
  }
</style>
