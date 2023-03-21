document.addEventListener('DOMContentLoaded', initialize)
    
function initialize() {
    let todoForm = document.querySelector("#create-task-form");
    let todoList = document.querySelector('#list');
   

    todoForm.addEventListener('submit', (event) => {
        
        event.preventDefault();

        let newTask = document.createElement('li');
        let todoText= document.querySelector("#new-task-description").value;
        
        newTask.innerHTML = todoText;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        newTask.appendChild(deleteBtn);

        todoList.appendChild(newTask);

        todoForm.reset();
    });

    todoList.addEventListener('dblclick', (event) => {
        
        console.log(event.target.style.textDecoration)

        if (event.target.style.textDecoration === 'line-through') {
          event.target.style.textDecoration = null;
        }

        else {
          event.target.style.textDecoration = 'line-through';
        }
    });


    todoList.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            let parent = event.target.parentNode;

            parent.remove();
        }

    })
    }
