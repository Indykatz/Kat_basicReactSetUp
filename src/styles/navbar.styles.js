// Imports the installed styled component library
import styled from "styled-components";

// The styles for NavbarStyled
// A HTML div
export const NavbarStyled = styled.div`
  border: solid 1px black;
  padding: 10px;
  width: auto;
  /* Flex box */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Responsive screen size */
  @media (max-width: 768px) {
    justify-content: right;
  }
`;

// The styles for NavItemStyled
// A HTML div
export const NavItemStyled = styled.div`
  border: solid 1px black;
  padding: 10px;
  font-size: 20px;
  margin: 10px;
  margin-right: 20px;
`;
