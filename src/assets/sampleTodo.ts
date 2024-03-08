import { Todo } from "../types/TodoType";

export const sampleTodo: Todo = {
  id: "1",
  title: "todo-list 만들기",
  content: "typescript로 todo-list 만들기",
  isDone: false,
  deadline: new Date().toLocaleDateString(),
};
