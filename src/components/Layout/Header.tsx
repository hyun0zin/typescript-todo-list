import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>To Do List</HeaderTitle>
    </HeaderContainer>
  );
}

export default Header;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  margin: 1rem;
`;

const HeaderTitle = styled.h1`
  font-size: xx-large;
  font-weight: 800;
`;
