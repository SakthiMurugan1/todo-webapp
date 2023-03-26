//Selectors
const addTaskField = document.querySelector('.addTaskField');
const addTaskButton = document.querySelector('.addTaskButton');

const taskList = document.querySelector('.taskList');

//Listeners
addTaskButton.addEventListener('click', addTaskToList); 

//Functions
function addTaskToList() {
    //Validation to check if anything is input
    let fieldValue = addTaskField.value;
    if (fieldValue.length === 0) {
        alert('Please enter     a task');
        return;
    }

    //Create the new task elements
    let taskItem = document.createElement('div');
    taskItem.setAttribute('class', 'taskItem');

    let taskName = document.createElement('span');
    taskName.setAttribute('class', 'taskName');
    taskName.textContent = fieldValue;

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.textContent = 'Delete'

    
    taskItem.appendChild(taskName);
    taskItem.appendChild(deleteButton);

    //Add the new task to the page
    taskList.appendChild(taskItem);

    //Clear the input and bring it to focus
    addTaskField.value = '';
    addTaskField.focus();
}