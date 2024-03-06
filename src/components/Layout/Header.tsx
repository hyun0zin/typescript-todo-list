import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <h1>To Do List</h1>
    </HeaderContainer>
  );
}

export default Header;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;
`;
