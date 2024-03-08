import styled from "styled-components";
import { Todo } from "../../types/TodoType";

interface TodoFormProps {
  addTodo: (todo: Todo) => void;
}
function TodoForm({ addTodo }: TodoFormProps) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    //빈 input 추가 막기
    if (!title.trim() && content) {
      alert("제목을 입력해주세요.");
      return;
    } else if (!content.trim() && title) {
      alert("내용을 입력해주세요.");
      return;
    } else if (!title.trim() && !content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    // if (!deadline) {
    //   alert("마감기한을 입력해주세요.");
    //   return;
    // }
    const todo: Todo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
      deadline: new Date().toLocaleDateString(),
    };

    addTodo(todo);
  };

  return (
    <section>
      <FormContainer onSubmit={onSubmit}>
        <InputCotainer>
          <InputTextStyle>
            Title &nbsp; <InputStyle type="text" name="title" />
          </InputTextStyle>
          <InputTextStyle>
            Content &nbsp;
            <InputStyle type="text" name="content" />
          </InputTextStyle>
          <InputTextStyle>
            Deadline &nbsp;
            <InputStyle type="date" style={{ width: "10rem" }} />
          </InputTextStyle>
        </InputCotainer>

        <ButtonContainer type="submit">제출</ButtonContainer>
      </FormContainer>
    </section>
  );
}

export default TodoForm;

const FormContainer = styled.form`
  background-color: rgb(235, 235, 235);
  border-radius: 20px;
  height: 75px;

  display: flex;
  align-items: center;

  position: relative;
  padding: 15px;
  margin: 10px;
`;

const InputCotainer = styled.div`
  gap: 1rem;

  display: flex;
  flex-direction: row;
`;

const InputStyle = styled.input`
  border-color: transparent;
  border-radius: 5px;
  width: 7rem;
`;
const InputTextStyle = styled.div`
  font-weight: 600;
  font-size: large;
`;
const ButtonContainer = styled.button`
  position: absolute;
  right: 50px;
  border-radius: 10px;
  width: 5rem;
`;
