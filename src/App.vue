<script setup>
</script>
<template>
  <main>
    <section>
      <div class="container m-auto">
        <div class="flex">
          <div></div>
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
                    <div class="flex flex-col pb-2 w-72 mx-3">
                      <p class="bg-black/50 flex-1 p-3 rounded-lg text-center whitespace-nowrap overflow-hidden text-ellipsis text-white">Главное меню</p>
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
    background: rgb(15 23 42);
  }
</style>
