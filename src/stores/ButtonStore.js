import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

const useButtonStore = defineStore('button', {
  state: () => ({
    currentButton: null,
    isSaveBtnDisabled: true,
    isColumnBtnClicked: false,
    isRowBtnClicked: false,
    buttons: [
      [{ id: 1, name: 'Главное меню', value: 'main-menu'}]
    ],
    newButton: {
      name: '',
      value: ''
    }
  }),
  actions: {
    addColumnButton() {
      const newButton = {
        id: uuidv4(),
        name: this.newButton.name,
        value: this.newButton.value
      };

      for(let i = 0; i < this.buttons.length; i++) {
        if (this.buttons[i].length < 3) {
          this.buttons[i].push(newButton);
        } else {
          this.buttons.splice(1, 0, [newButton]);
        }
      }
  
      this.newButton.name = '';
      this.newButton.value = '';
    },
    addRowButton() {
      const newButton = {
        id: uuidv4(),
        name: this.newButton.name,
        value: this.newButton.value
      };

      if (this.buttons.length === 0 || this.buttons[this.buttons.length - 1].length >= 3) {
        this.buttons.push([newButton]);
      } else {
        this.buttons[this.buttons.length - 1].push(newButton);
      }
    
      for (let i = 0; i < this.buttons.length - 1; i++) {
        for (let j = 0; j < this.buttons[i].length; j++) {
          this.buttons[i][j].id = this.buttons[i][j].id + 1;
        }
      }
    
      this.newButton.name = '';
      this.newButton.value = '';
    },
    selectCurrentButton(button) {
      this.currentButton = button;
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
    toggleColumnBtnClicked() {
      this.isColumnBtnClicked = !this.isColumnBtnClicked;
    },
    toggleRowBtnClicked() {
      this.isRowBtnClicked = !this.isRowBtnClicked;
    },
  }
});
export default useButtonStore;
