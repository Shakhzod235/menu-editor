import { defineStore } from 'pinia';

const useDisplayStore = defineStore('display', {
  state: () => ({
    isElementVisible: false
  }),
  actions: {
    toggleElement() {
      this.isElementVisible = !this.isElementVisible;
    }
  }
});
export default useDisplayStore;
