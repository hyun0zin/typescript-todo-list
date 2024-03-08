import styled from "styled-components";
import { Todo } from "../../types/TodoType";
interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

function TodoItem({ todo, deleteTodo, toggleTodo }: TodoItemProps) {
  const { title, content, deadline, id, isDone } = todo;
  const onClickDeleteBtn = () => deleteTodo(id);
  const onClickToggleBtn = () => toggleTodo(id);

  return (
    <TodoCardContainer>
      <article>
        <TodoTextContainer>
          <TitleStyle>{title}</TitleStyle>
          <p>{content}</p>
          <time>{deadline}</time>
        </TodoTextContainer>
        <BtnContainer>
          <BtnStyle
            onClick={onClickDeleteBtn}
            style={{ backgroundColor: "#FF6B6B" }}
          >
            삭제
          </BtnStyle>
          <BtnStyle
            onClick={onClickToggleBtn}
            style={{ backgroundColor: "#6BCB77" }}
          >
            {isDone ? "취소" : "완료"}
          </BtnStyle>
        </BtnContainer>
      </article>
    </TodoCardContainer>
  );
}
export default TodoItem;

const TodoCardContainer = styled.li`
  list-style-type: none;
  border: 5px solid rgb(155, 155, 161);
  border-radius: 10px;

  width: 300px;
  padding: 20px;
  margin: 10px;

  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const TodoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const TitleStyle = styled.h3`
  font-size: x-large;
  font-weight: 600;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding-top: 10px;
`;

const BtnStyle = styled.button`
  width: 50%;
  border-color: transparent;
  border-radius: 10px;
  height: 2rem;
  color: white;
  /* font-weight: 600; */
`;
