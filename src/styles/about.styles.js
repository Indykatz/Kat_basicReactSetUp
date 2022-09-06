// Imports the installed styled component library
import styled from "styled-components";

// The styles for ContentFlexBox
// A HTML div
export const ContentFlexBox = styled.div`
  border: solid 1px black;
  padding: 10px;
  width: auto;
  /* Flex box */
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  /* responsive screen for mobile devices */
  @media (max-width: 768px) {
    flex-direction: column;
    color: red;
  }
`;

// The styles for ContentFlexBox
// A html div
export const ContentItemBox = styled.div`
  border: solid 1px black;
  padding: 10px;
  font-size: 20px;
  margin: 10px;
  margin-right: 20px;
`;
