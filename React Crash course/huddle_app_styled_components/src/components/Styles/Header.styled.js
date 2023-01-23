import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) =>
    theme.colors
      .header}; // OR use destucture {({ bg }) => bg} so we don't have to do props.bg
  padding: 40px 0;

  // h1 { // nesting
  //     colot:red;
  // }

  // &:hover { // & means parent element
  //     background-color: green;
  // }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
