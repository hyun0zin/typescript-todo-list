import { useState } from "react";
import { Todo } from "../types/TodoType";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // todo 추가 하기
  const addTodo = (todo: Todo) => {
    setTodos((preTodos) => [todo, ...preTodos]);
  };

  return { todos, addTodo };
};
