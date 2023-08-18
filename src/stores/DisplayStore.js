import { defineStore } from 'pinia';

const useDisplayStore = defineStore('display', {
  state: () => ({
    isElementVisible: false,
    activeModal: ''
  }),
  actions: {
    toggleElement(modalType) {
      this.isElementVisible = !this.isElementVisible;
      this.activeModal = modalType;
    }
  }
});
export default useDisplayStore;
