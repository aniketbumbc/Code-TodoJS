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
        }else{
            for (var i = 0; i < totolTodos; i++) {
                this.todos[i].compeleted = true;
            }
        }
        this.displayTodo();
    }
};

var displayTodoButton = document.getElementById('displayTodoButton');
var toggledAllButton = document.getElementById('toggledAllButton');
console.log(displayTodoButton);
console.log(toggledAllButton);

displayTodoButton.addEventListener('click',function(){
    todosList.displayTodo();
});

toggledAllButton.addEventListener('click',function(){
    todosList.toggledAll();
});