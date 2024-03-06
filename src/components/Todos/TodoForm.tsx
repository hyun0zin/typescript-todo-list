function TodoForm() {
  return (
    <section>
      <form>
        <input type="text" name="title" />
        <input type="text" name="content" />
        <input type="date" />
        <button>제출</button>
      </form>
    </section>
  );
}

export default TodoForm;
