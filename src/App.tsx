import Header from "./\bcomponents/Layout/Header";
import TodoForm from "./\bcomponents/Todos/TodoForm";
import TodoList from "./\bcomponents/Todos/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, addTodo } = useTodos();

  return (
    <main>
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList todoTitle="Working...🔥" todos={todos} />
      <TodoList todoTitle="Done🎉" todos={todos} />
    </main>
  );
}

export default App;
