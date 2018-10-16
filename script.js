console.log("Hello test");

var todosList = {
    todos: ['item1', 'item1', 'item1', 'item1', 'item1', 'item1'],
    displayTodo: function () {
        console.log('MyList :-', this.todos);
    },
    addTodo: function (item) {
        this.todos.push(item);
        this.displayTodo();
    },
    changeTodo: function (position, newvalue) {
        this.todos[position] = newvalue;
        this.displayTodo();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodo();
    }
};