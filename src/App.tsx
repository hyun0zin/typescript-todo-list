import styled from "styled-components";
import Header from "./\bcomponents/Layout/Header";
import TodoForm from "./\bcomponents/Todos/TodoForm";
import TodoList from "./\bcomponents/Todos/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { addTodo, deleteTodo, toggleTodo, inProgressTodos, doneTodos } =
    useTodos();

  return (
    <MainContainer>
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoTitle="Working...🔥"
        todos={inProgressTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
      <TodoList
        todoTitle="Done🎉"
        todos={doneTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.main`
  padding: 20px;

  min-width: 800px;
  max-width: 1200px;
`;
