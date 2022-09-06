// Called in App.js

// Styled from styled component folder header
import { HeaderStyled } from "../styles/header.styles";

// Styled from styled component folder app
import { Header1Styled } from "../styles/app.styles";

// Header function
const Header = () => {
  return (
    // HeaderStyled component
    <HeaderStyled>
      {/* Headwer1Styled component */}
      <Header1Styled>Header Banner</Header1Styled>
      {/* End of styled */}
    </HeaderStyled>
  );
};

// export header
export default Header;
