const Todo = {
  todos: [],
  newTodo: "",
  add: () => {
    Todo.todos.push(Todo.newTodo);
    Todo.newTodo = "";
  },
  remove: todo => (Todo.todos = Todo.todos.filter(t => t !== todo))
};

export default Todo;
