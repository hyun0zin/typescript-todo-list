import { Todo } from "../../types/TodoType";

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
            <li key={todo.id}></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TodoList;
