import styled from "styled-components";
import { Todo } from "../../types/TodoType";
interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const { title, content, deadline } = todo;

  return (
    <TodoCardItem>
      <article>
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
          <time>{deadline}</time>
        </div>
        <div>
          <button>삭제</button>
          <button>완료</button>
        </div>
      </article>
    </TodoCardItem>
  );
}
export default TodoItem;

const TodoCardItem = styled.li`
  list-style-type: none;
  border: 5px solid rgb(155, 155, 161);
  border-radius: 10px;

  width: 300px;
  padding: 20px;
  margin: 10px;
`;
