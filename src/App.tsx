import Header from "./\bcomponents/Layout/Header";
import TodoForm from "./\bcomponents/Todos/TodoForm";
import TodoList from "./\bcomponents/Todos/TodoList";

function App() {
  return (
    <main>
      <Header />
      <TodoForm />
      <TodoList />
      <TodoList />
    </main>
  );
}

export default App;
