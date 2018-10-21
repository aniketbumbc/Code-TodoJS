console.log("Hello test");

var todosList = {
    todos: [],
    displayTodo: function () {

        if (this.todos.length === 0) {

            console.log("Please Add item in List");
        } else {
            console.log('MyList :-');
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].compeleted === true)
                    console.log("(x)" + this.todos[i].todoText);
                else {
                    console.log("( )" + this.todos[i].todoText);
                }
            }
        }
    },
    addTodo: function (itemText) {

        this.todos.push({
            todoText: itemText,
            compeleted: false
        });
        this.displayTodo();
    },
    changeTodo: function (position, itemText) {
        this.todos[position].todoText = itemText;
        this.displayTodo();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodo();
    },
    toggledCompleted: function (position) {
        var todo = this.todos[position];
        todo.compeleted = !todo.compeleted;
        this.displayTodo();
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
        this.displayTodo();
    }
};

var handlers = {
    displayTodo: function () {
        todosList.displayTodo();
    },
    addTodo: function () {
        itemText = document.getElementById('add');
        todosList.addTodo(itemText.value);
        itemText.value = ' ';
    },
    changeTodo: function () {
        position = document.getElementById('position');
        itemText = document.getElementById('change');
        todosList.changeTodo(position.value, itemText.value);
        itemText.value = ' ';
        position.value = ' ';
    },
    deleteTodo: function () {
        position = document.getElementById('delete');
        todosList.deleteTodo(position.value);
        position.value = ' ';
    },
    toggledCompleted: function () {
        position = document.getElementById('toggledDone');
        todosList.toggledCompleted(position.value);
        position.value = ' ';
    },
    toggledAll: function () {
        todosList.toggledAll();
    }
};

var view = {
    displayTodo:function(){       
        var todoUl = document.querySelector('ul');
        todoUl.innerHTML = ' ';
        for(var i=0; i<todosList.todos.length; i++ ){          
            var todoLi = document.createElement('li');
            todoUl.appendChild(todoLi);
        }
    }

};