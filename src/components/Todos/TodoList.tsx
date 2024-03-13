import styled from "styled-components";
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
      <ListTitle>{todoTitle}</ListTitle>

      <div>
        <TodoListContainer>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </TodoListContainer>
      </div>
    </>
  );
}

export default TodoList;
const ListTitle = styled.h2`
  font-size: x-large;
  font-weight: 800;
`;

const TodoListContainer = styled.ul`
  gap: 20px;
  padding: 10px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
