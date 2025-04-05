const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2025-03-05'
}, {
  name: 'wash dishes',
  dueDate: '2025-03-05'
}];

renderTodoList();

// function addTodo(){
//  const todoInput = document.querySelector('.js-todo-name');

//  const name = todoInput.value;

//  todoList.push(name);
//  console.log(todoList);

//  todoInput.value = '';
// }

/*
function renderTodoList() {
  let todohtml = '';
  for (let i = 0; i < todoList.length; i++) {
   
    todohtml +=  `<p>${todoList[i]}</p>`;

  }

  document.querySelector('.js-todo-div').innerHTML = todohtml;
}


function addTodo(){
 const todoInput = document.querySelector('.js-todo-name');
 
 const name = todoInput.value;

 todoList.push(name);
 console.log(todoList);

 todoInput.value = '';

 renderTodoList();
}
*/

//renderTodoList after splice is beacuse we need to re-run the program to display updated result renderTdoList show what is inside todoList array so afetr deletion it display what inside that array
function renderTodoList() {
  let todohtml = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const {name , dueDate} = todoObject; //Same as const name = todoObject.name and const dueDate = todoObject.dueDate this term is called destructuring
    const html = `<div>${name}</div>
                  <div>${dueDate}</div> 
                    <button onclick= "
                    todoList.splice(${i}, 1);
                    renderTodoList();

                // Whenever we update the todo list, save in localStorage.
                    saveToStorage();
                  " class = "delete-todo-button">Delete</button>
                  `;
    todohtml +=  html;

  }
  console.log(todohtml);
  document.querySelector('.js-todo-div').innerHTML = todohtml;
}


function addTodo(){
 const todoInput = document.querySelector('.js-todo-name');
 
 const name = todoInput.value;

 const dateInput = document.querySelector('.js-due-date-input');

 const dueDate = dateInput.value;

 todoList.push({
  // name: name,
  // dueDate: dueDate
  //this is called shorhand method where value name and container name is same 
  name,
  dueDate
});
 console.log(todoList);

 todoInput.value = '';

 dateInput.value = '';

 renderTodoList();

 saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}