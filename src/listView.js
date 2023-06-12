import state from "./state.js";

export default class List {

    _addNewItem(parent, markup){
        parent.insertAdjacentHTML("afterbegin", markup)
    }

    _clearElement (el){
        el.value = ''
    }

    _clearListAndResetState(listId){
        const listToClear = document.querySelector(listId);
        while (listToClear.firstChild) {
            listToClear.removeChild(listToClear.lastChild)
        }
        if (listId === '#list-1') {
            state.tasks = [];
            localStorage.removeItem('tasks')
        } else {
            state.shoppingList = [];
            localStorage.removeItem('itemsToBuy')
        }
    }

    handleClearingList(){
        this._clearBtn.addEventListener('click', () => {
            this._clearListAndResetState(this._listId)
        })
    }
};



