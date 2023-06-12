import { getNews } from "./newsView.js";
import plannerList from "./plannerListView.js";
import shoppingList from "./shoppingListView.js";

const initHandlers = () => {
    plannerList.handleAddingTask();
    shoppingList.handleAddingItemToBuy();
    plannerList.handleCloseEditPopup();
    plannerList.handleClearingList();
    shoppingList.handleClearingList();
};

window.addEventListener('DOMContentLoaded', () =>{
    const shopping = localStorage.getItem('itemsToBuy');
    const tasks = localStorage.getItem('tasks');
    if(shopping){
        shoppingList.handleRetrieveShoppingList();
    }if(tasks){
        plannerList.handleRetrievePlannerList()
    }else return
})

const init = () => {
    getNews();
    plannerList.renderPlannerDate();
};

initHandlers();
init()