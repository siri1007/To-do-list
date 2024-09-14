
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
 const todoList = document.getElementById('todo-list');
        
        // Load existing to-dos from local storage
        let todos = JSON.parse(localStorage.getItem('todos')) || [];

        // Function to save to-dos to local storage
        function saveTodos() {
            localStorage.setItem('todos', JSON.stringify(todos));
        }


        function renderTodos() {
            todoList.innerHTML = '';
            todos.forEach((todo, index) => {
                const li = document.createElement('li');
                li.textContent = todo;

                const crossIcon = document.createElement('span');
                crossIcon.textContent = '✖';
                crossIcon.classList.add('cross-icon');
                crossIcon.onclick = function() {
                    deleteTodo(index);
                };

                li.appendChild(crossIcon);
                todoList.appendChild(li);
            });
        }

        // Function to add a new to-do
        function addTodo() {
            const newTodo = todoInput.value.trim();
            if (newTodo !== '') {
                todos.push(newTodo);
                saveTodos();
                renderTodos();
                todoInput.value = ''; // Clear input field
            }
        }

        // Function to delete a to-do
        function deleteTodo(index) {
            todos.splice(index,1);
            saveTodos();
            renderTodos();
        }

        todoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            addTodo();
        });
        

        // Initial render
        renderTodos();