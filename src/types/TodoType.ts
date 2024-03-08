export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  deadline: string;
}

export interface inProgressTodo extends Todo {
  isDone: false;
}

export interface doneTodo extends Todo {
  isDone: true;
}
