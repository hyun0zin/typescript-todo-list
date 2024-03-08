import { Todo } from "../../types/TodoType";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todoTitle: string;
  todos: Todo[];
}

function TodoList({ todoTitle, todos }: TodoListProps) {
  return (
    <section>
      <h2>{todoTitle}</h2>

      <div>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TodoList;
