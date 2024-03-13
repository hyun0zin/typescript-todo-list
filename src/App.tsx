import styled from "styled-components";
import Header from "./components/Layout/Header";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { addTodo, deleteTodo, toggleTodo, inProgressTodos, doneTodos } =
    useTodos();

  return (
    <DisplayCenter>
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
    </DisplayCenter>
  );
}

export default App;

const DisplayCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.main`
  padding: 20px;

  min-width: 800px;
  max-width: 1200px;
`;
