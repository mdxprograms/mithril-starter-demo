import Todo from "../models/Todo";
import "../styles/todos.scss";

const TodosView = {
  view: () =>
    m(".todos", [
      m("input#todo-input", {
        onkeyup: e => (Todo.newTodo = e.target.value),
        placeholder: "Needs done...",
        value: Todo.newTodo
      }),
      m("button", { onclick: Todo.add }, "Add to list"),
      m(
        ".todo-list",
        Todo.todos.map(t => [
          m(".todo", [
            m(".text", t),
            m("button", { onclick: () => Todo.remove(t) }, "Done")
          ])
        ])
      )
    ])
};

export default TodosView;
