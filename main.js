//Selectors
const addTaskField = document.querySelector('.addTaskField');
const addTaskButton = document.querySelector('.addTaskButton');
const taskList = document.querySelector('.taskList');


//Init
let taskCount = 0;
addTaskField.textContent = '';
addTaskField.focus()

//Listeners
addTaskButton.addEventListener('click', addTaskToList); 

/*Listener for the dynamically created deleteButton */
document.body.addEventListener( 'click', function (event) {
    if( event.target.id == 'deleteButton' ) {
      deleteTaskFromList(event.target);
    };
});

//Functions
function addTaskToList() {

    //Validation to check if anything is input
    let fieldValue = addTaskField.value;
    if (fieldValue.length === 0) {
        alert('Please enter a task');
        return;
    }

    //Update taskCount
    if (taskCount===0) {
        nothingToDoText = document.querySelector('.nothingToDoText')
        nothingToDoText.textContent = '';
    }
    taskCount += 1;

    //Create the new task elements
    let taskItem  = createNewListItem(fieldValue);
    //Add the new task to the page
    taskList.appendChild(taskItem);

    //Add fieldvalue into sessionStorage
    sessionStorage.setItem(taskCount, fieldValue.toString())

    //Clear the input and bring it to focus
    addTaskField.value = '';
    addTaskField.focus();

}

function createNewListItem (fieldValue) {
    /*
    Structire of a listItem:
    <div> 
    span></span>
    <button><button/>
    </div> */

    let taskItem= document.createElement('div');
    taskItem.setAttribute('class', 'taskItem');

    let taskName = document.createElement('span'); 
    taskName.setAttribute('class', 'taskName');
    taskName.textContent = fieldValue;

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.setAttribute('id', 'deleteButton');
    deleteButton.textContent = 'Delete'
    
    taskItem.appendChild(taskName);
    taskItem.appendChild(deleteButton);

    return taskItem;
}

function deleteTaskFromList (target) {
    taskList.removeChild(target.parentNode);
    addTaskField.focus();
    taskCount -= 1;

    if (taskCount === 0) {
        nothingToDoText = document.querySelector('.nothingToDoText')
        nothingToDoText.textContent = 'Nothing to do :)';
    }
}