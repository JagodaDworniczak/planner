import List from "./listView.js";
import state from "./state.js";

class ShoppingList extends List {

    _clearBtn = document.querySelector('.btn-clear-list')
    _listId = '#list-2'

    _addShoppingItem(){
        const shopppingInput = document.querySelector('.shopping-input');
        const shopppingList = document.querySelector('.shopping-list')
        const inputValue = shopppingInput.value;
        state.shoppingList.push(inputValue);
        localStorage.setItem('itemsToBuy', state.shoppingList);
        const item = `✔️ ${inputValue}`;
        const newListEl = document.createElement('li');
        newListEl.classList.add('shopping-item')
        this._addNewItem(newListEl, item);
        shopppingList.prepend(newListEl);
        this._clearElement(shopppingInput);
        this._handleClearingShoppingItems(newListEl);
    }

    _getItemIndex(listItem){
        const content = listItem.innerText.slice(3);
        const index = state.shoppingList.indexOf(content);
        return index
    }
    
    _handleClearingShoppingItems(li){
        li.addEventListener('click', () => {
            const index = this._getItemIndex(li);
            state.shoppingList.splice(index, 1);
            localStorage.setItem('itemsToBuy', state.shoppingList);
            li.classList.toggle('task-done');
            setTimeout(() => li.remove(), 500)
        })
    }

    handleAddingItemToBuy(){
        const shopppingForm = document.querySelector('.shopping-form');
        shopppingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this._addShoppingItem()
        })
    }

    handleRetrieveShoppingList(){
        const savedList = localStorage.getItem('itemsToBuy').split(',');
        this._retrieveShoppingItem(savedList);
    }

    _retrieveShoppingItem(arr){
        const shopppingList = document.querySelector('.shopping-list')
        arr.map(el => {
            const newListEl = document.createElement('li');
            newListEl.classList.add('shopping-item');
            const markup = `✔️ ${el}`;
            this._addNewItem(newListEl, markup);
            shopppingList.prepend(newListEl);
            state.shoppingList.push(el);
            this._handleClearingShoppingItems(newListEl)
        });
    }
};

export default new ShoppingList();