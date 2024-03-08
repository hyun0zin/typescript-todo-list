import { Todo } from "../../types/TodoType";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todoTitle: string;
  todos: Todo[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

function TodoList({ todoTitle, todos, deleteTodo, toggleTodo }: TodoListProps) {
  return (
    <>
      <h2>{todoTitle}</h2>

      <div>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
