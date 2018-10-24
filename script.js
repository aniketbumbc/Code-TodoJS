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
        for (var i = 0; i < totolTodos; i++) {
            if (this.todos[i].compeleted === true) {
                compeletedTodo++;
            }
        }
        //everything is true make everything false
        if (compeletedTodo === totolTodos) {
            for (var i = 0; i < totolTodos; i++) {
                this.todos[i].compeleted = false;
            }
        } else {
            for (var i = 0; i < totolTodos; i++) {
                this.todos[i].compeleted = true;
            }
        }
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
    deleteTodo: function () {
        position = document.getElementById('delete');
        todosList.deleteTodo(position.value);
        position.value = ' ';
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
        for (var i = 0; i < todosList.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todo = todosList.todos[i];
            var textWithCompleted = '';

            if (todo.compeleted === true) {
                textWithCompleted = '( X )' + todo.todoText;
            } else {
                textWithCompleted = '( )' + todo.todoText;
            }
            todoLi.textContent = textWithCompleted;
            todoLi.appendChild(this.createDeleteButton ());
            todoUl.appendChild(todoLi);
        }
    },
    createDeleteButton () {
        var deleteButton = document.createElement('button');
     
        deleteButton.className = ' Delete';
        deleteButton.textContent = 'Delete List';

        return deleteButton
    }

};