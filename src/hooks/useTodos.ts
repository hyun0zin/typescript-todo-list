import { useState } from "react";
import { Todo, doneTodo, inProgressTodo } from "../types/TodoType";
import { sampleTodo } from "../assets/sampleTodo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([sampleTodo]);

  const inProgressTodos = todos.filter(
    (todo) => !todo.isDone
  ) as inProgressTodo[];
  const doneTodos = todos.filter((todo) => todo.isDone) as doneTodo[];

  // Todo 추가하기
  const addTodo = (todo: Todo) => {
    setTodos((preTodos) => [todo, ...preTodos]);
  };

  // Todo 삭제하기
  const deleteTodo = (id: string) => {
    setTodos((preTodos) => preTodos.filter((todo) => todo.id !== id));
  };

  // Todo 완료/취소하기
  const toggleTodo = (id: string) => {
    setTodos((preTodos) =>
      preTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return { todos, addTodo, deleteTodo, toggleTodo, inProgressTodos, doneTodos };
};
