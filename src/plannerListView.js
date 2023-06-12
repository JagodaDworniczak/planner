import List from "./listView.js";
import { generateDateTime } from "./helpers";
import state from "./state.js";

class PlannerList extends List {

    _newTask = document.querySelector('.task-input');
    _tasksList = document.querySelector('.list-items');
    _editPopup = document.querySelector('.edit-popup');
    _editInput = document.querySelector('.edit-input');
    _clearBtn = document.querySelector('.btn-clear-tasks')
    _listId = '#list-1'

    renderPlannerDate(){
        const weekdays = {
            0: 'Sunday',
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday'
        };
        const day = weekdays[new Date().getDay()];
        const dateWithWeekday = `<p>🗓 ${day}, ${generateDateTime()}</p>`;
        const dateSection = document.querySelector('.planner-date');
        dateSection.insertAdjacentHTML("afterbegin", dateWithWeekday);
    }

    _generateNewSaveBtn(){
        const saveBtn = document.querySelector('.btn-save');
        const newSaveBtn = saveBtn.cloneNode(true);
        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
        return newSaveBtn
    }

    _renderTaskWithHandlers(){
        const newListEl = document.createElement('li');
        this._addClass(newListEl, 'list-item');
        this._addNewItem(newListEl, this._generateMarkup());
        this._tasksList.prepend(newListEl);
        this._clearElement(this._newTask);
        this._addHandlersToNewTask(newListEl)
    }

    _addHandlersToNewTask(newListEl){
        newListEl.addEventListener('click', (e) => {
            const date = e.target.closest('.date');
            if (date) {
                this._editLabel(date);
            };
            const removeTask = e.target.closest('.btn-remove');
            if (removeTask) {
                const index = this._getTaskIndex(newListEl);
                state.tasks.splice(index, 1);
                this._addTasksToLocalStorage()
                newListEl.remove();
            };
            const btnEdit = e.target.closest('.btn-edit');
            if (!btnEdit) return
            this._editTask(newListEl);
        })
    }

    _getTaskIndex(listItem){
        const taskContent = listItem.querySelector('.task-content').innerText;
        const taskIndex = state.tasks.indexOf(taskContent);
        return taskIndex
    }
    
    _editTask(listItem){
        const taskIndex = this._getTaskIndex(listItem);
        this._handleOpenEditPopup(taskIndex);
        const saveBtn = this._generateNewSaveBtn();
        saveBtn.addEventListener('click', () => {
            const newContent = this._editInput.value
            const listEl = listItem.querySelector('.task-content');
            listEl.textContent = newContent;
            state.tasks[taskIndex] = newContent;
            this._addTasksToLocalStorage()
            this._editPopup.classList.replace('popup-visible', 'popup-hidden');
        })
    }

    _addTasksToLocalStorage(){
        localStorage.setItem('tasks', state.tasks);
    }

    _handleOpenEditPopup(indexEl){
        this._editPopup.classList.replace('popup-hidden', 'popup-visible');
        this._editInput.value = state.tasks[indexEl];
    }
    
    _editLabel(date){
        if (date.classList.contains('label-red')) {
            date.classList.replace('label-red', 'label-yellow');
        } else if (date.classList.contains('label-yellow')) {
            date.classList.replace('label-yellow', 'label-blue');
        } else if ((date.classList.contains('label-blue'))) {
            date.classList.replace('label-blue', 'label-green')
        } else {
            date.classList.replace('label-green', 'label-red');
        };
    }

    _generateMarkup(){
        const newTaskValue = `${this._newTask.value}. 🗓 ${generateDateTime()}`;
        const markup = `
            <div class="list-item__div">
                ${this._generateDefaultLabel()}
                <div class = "task-content"> 
                    ${newTaskValue}
                </div>
                <button class="btn-remove">Remove</button>
                <button class="btn-edit">Edit task</button>
            </div>
            `
        state.tasks.push(newTaskValue);
        localStorage.setItem('tasks', state.tasks);
        return markup
    }

    _generateDefaultLabel(){
        const markup = 
        `<div class = "date label label-yellow"> ✔️ </div>`
        return markup
    }

    _addClass(el, cl){
        el.classList.add(cl)
    }

    handleRetrievePlannerList(){
        const savedList = localStorage.getItem('tasks').split(',');
        this._retrieveList(savedList);
    }

    _retrieveList(arr){
        arr.map(el => {
            const newListEl = document.createElement('li');
            this._addClass(newListEl, 'list-item');
            const markup = `
                <div class="list-item__div">
                ${this._generateDefaultLabel()}
                <div class = "task-content"> ${el}</div>
                <button class="btn-remove">Remove</button>
                <button class="btn-edit">Edit task</button>
                </div>
            `
            this._addNewItem(newListEl, markup);
            this._tasksList.prepend(newListEl);
            this._clearElement(this._newTask);
            this._addHandlersToNewTask(newListEl);
            state.tasks.push(el)
        });
    }

    handleAddingTask(){
        const addTaskForm = document.querySelector('.planner-form');
        addTaskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this._renderTaskWithHandlers();
        })
    }
    
    handleCloseEditPopup(){
        const btnClose = document.querySelector('.btn-close-popup')
        btnClose.addEventListener('click', () => this._editPopup.classList.replace('popup-visible', 'popup-hidden'))
    }

};

export default new PlannerList();


