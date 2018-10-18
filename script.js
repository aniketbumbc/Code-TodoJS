console.log("Hello test");

var todosList = {
    todos: [],
    displayTodo: function () {
        if (this.todos.length == 0) {
            console.log("Please Add item in List");
        } else {
            console.log('MyList :-');
            for (var i = 0; i < this.todos.length; i++) {
                console.log(this.todos[i].todoText);
            }
        }
    },
    addTodo: function (itemText) {
        this.todos.push({
            todoText: itemText,
            compeleted: true
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
    }
};