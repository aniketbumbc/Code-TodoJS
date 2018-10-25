console.log("Hello test");

var todosList = {
    todos: [],
    addTodo: function (itemText) {

        this.todos.push({
            todoText: itemText,
            compeleted: false
        });
    },
    changeTodo: function (position, itemText) {
        this.todos[position].todoText = itemText;
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
    },
    toggledCompleted: function (position) {
        var todo = this.todos[position];
        todo.compeleted = !todo.compeleted;
    },
    toggledAll: function () {
        ////everything is true make everything true
        var totolTodos = this.todos.length;
        var compeletedTodo = 0;
        this.todos.forEach(function (todo) {
            if (todo.compeleted === true) {
                compeletedTodo++;
            }
        });
        //everything is true make everything false
        this.todos.forEach(function (todo) {
            if (compeletedTodo === totolTodos) {
                todo.compeleted = false;
            } else {
                todo.compeleted = true;
            }
        });


    }
};

var handlers = {
    addTodo: function () {
        itemText = document.getElementById('add');
        todosList.addTodo(itemText.value);
        itemText.value = ' ';
        view.displayTodo();
    },
    changeTodo: function () {
        position = document.getElementById('position');
        itemText = document.getElementById('change');
        todosList.changeTodo(position.value, itemText.value);
        itemText.value = ' ';
        position.value = ' ';
        view.displayTodo();
    },
    deleteTodo: function (position) {
        //position = document.getElementById('delete');
        todosList.deleteTodo(position);
        view.displayTodo();
    },
    toggledCompleted: function () {
        position = document.getElementById('toggledDone');
        todosList.toggledCompleted(position.value);
        position.value = ' ';
        view.displayTodo();
    },
    toggledAll: function () {
        todosList.toggledAll();
        view.displayTodo();
    }
};

var view = {
    displayTodo: function () {
        var todoUl = document.querySelector('ul');
        todoUl.innerHTML = ' ';

        todosList.todos.forEach(function(todo,position){
            var todoLi = document.createElement('li');
            var textWithCompleted = '';

            if (todo.compeleted === true) {
                textWithCompleted = '( X )' + todo.todoText;
            } else {
                textWithCompleted = '( )' + todo.todoText;
            }
            todoLi.id = position;
            todoLi.textContent = textWithCompleted;
            todoLi.appendChild(this.createDeleteButton());
            todoUl.appendChild(todoLi);
            },this);          
        },
    createDeleteButton() {
        var deleteButton = document.createElement('button');

        deleteButton.className = ' Delete';
        deleteButton.textContent = 'Delete List';
        return deleteButton;
    },
    setUpEventListeners: function () {
        var todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function (e) {
            //console.log(e.target.parentNode.id);

            var elementClicked = event.target;
            if (elementClicked.className = 'Delete') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();