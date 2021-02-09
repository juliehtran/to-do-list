// STATE
// stores things that the computer keeps track of
let thingsToDo = [`pet meemo`, `eat cake`, `kiss honeys`]

function turnTodoItemIntoHTML(toDoItem) {
  return `
    <li>
      <input type="checkbox">
      ${toDoItem}
      <button class="fas delete-button hover-only">DELETE!</button>
    <li>
  `
}

// function which we can call at any time which will make the page update the todo list
function updateTodoList() {
  listOfHTML = thingsToDo.map(turnTodoItemIntoHTML)
  document.querySelector(`#todo-list-items`).innerHTML = listOfHTML
}

// enter key listener

document.addEventListener(`keydown`, function(keypress) {
  //   when the key is pressed
  if (keypress.key === 'Enter'){
    //   get the value of the input

    //   add it to the array

    //   call the function to update the todo list

  }
}



// delete button click listener
//   when the button is clicked
//   the todo item which is specified by the click
//   delete the item from the list in the state
//   update the todo list HTML with our cute function



// delete all button click listener
//   when the button is clicked
//   clear the array of thingsToDo, reassign it to be empty
//   update the todolist HTML again!!!!
