import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

const useButtonStore = defineStore('button', {
  state: () => ({
    maxButtonsPerRow: 3,
    maxRows: 6,
    currentButton: null,
    currentRowIndex: null,
    isSaveBtnDisabled: true,
    isAddColumnBtnClicked: false,
    isAddRowBtnClicked: false,

    buttons: [[{ id: uuidv4(), name: 'Главное меню', value: 'main-menu' }]],
    newButton: {
      name: '',
      value: '',
    },
    targetRow: [],
  }),
  actions: {
    addRowButton() {
      const newButton = {
        id: uuidv4(),
        name: this.newButton.name,
        value: this.newButton.value,
      };

      this.buttons.push([newButton]);

      this.newButton = {
        name: '',
        value: '',
      };

      this.isSaveBtnDisabled = true;
    },
    addColumnButton() {
      const newButton = {
        id: uuidv4(),
        name: this.newButton.name,
        value: this.newButton.value,
      };

      if (this.currentRowIndex !== null) {
        this.buttons[this.currentRowIndex].push(newButton);
        this.currentRowIndex = null;
      }

      this.newButton = {
        name: '',
        value: '',
      };

      this.isSaveBtnDisabled = true;
    },
    selectCurrentButton(button) {
      this.currentButton = button;
    },
    isAddColumnBtnVisible(rowIndex) {
      return this.buttons[rowIndex].length < this.maxButtonsPerRow;
    },
    isAddRowBtnVisible() {
      return this.buttons.length < this.maxRows;
    },
    deleteButton() {
      for (let i = 0; i < this.buttons.length; i++) {
        for (let j = 0; j < this.buttons[i].length; j++) {
          if (this.buttons[i][j].id === this.currentButton.id) {
            this.buttons[i].splice(j, 1);
            if (this.buttons[i].length === 0) {
              this.buttons.splice(i, 1);
            }
            return;
          }
        }
      }
    },
    handleSingleButton() {
      return this.buttons.flat().length <= 1;
    },
    checkEmptyInput() {
      const inputIsEmpty = this.newButton.name.trim() === '';
      this.isSaveBtnDisabled = inputIsEmpty;
    },
    toggleAddColumnBtn(rowIndex) {
      this.isAddColumnBtnClicked = !this.isAddColumnBtnClicked;
      this.currentRowIndex = rowIndex;
    },
    toggleAddRowBtn() {
      this.isAddRowBtnClicked = !this.isAddRowBtnClicked;
    }
  }
});
export default useButtonStore;
