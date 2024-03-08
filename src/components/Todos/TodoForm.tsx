import { Todo } from "../../types/TodoType";

function TodoForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const todo: Todo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
      deadline: new Date().toLocaleDateString(),
    };

    console.log("todo", todo);
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input type="text" name="title" />
        <input type="text" name="content" />
        <input type="date" />
        <button type="submit">제출</button>
      </form>
    </section>
  );
}

export default TodoForm;
