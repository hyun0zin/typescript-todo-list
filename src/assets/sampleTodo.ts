import { Todo } from "../types/TodoType";

export const sampleTodo: Todo = {
  id: "1",
  title: "Todo-list 만들기",
  content: "Typescript로 todo-list 만들기",
  isDone: false,
  deadline: new Date().toLocaleDateString(),
};
