import Header from "./\bcomponents/Layout/Header";
import TodoForm from "./\bcomponents/Todos/TodoForm";
import TodoList from "./\bcomponents/Todos/TodoList";

function App() {
  return (
    <main>
      <Header />
      <TodoForm />
      <TodoList todoTitle="Working...🔥" todos={[]} />
      <TodoList todoTitle="Done🎉" todos={[]} />
    </main>
  );
}

export default App;
