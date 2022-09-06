// Styled components from styles folder app.styles
import { AppStyles, ContentStyled, Header1Styled } from "../styles/app.styles";

// Home function
const Home = () => {
  return (
    // AppStyles styled component
    <AppStyles>
      {/* ContentStyled styled component */}
      <ContentStyled>
        {/* Header1StyledComponent */}
        <Header1Styled>Home</Header1Styled>
        {/* ContentItem styled component */}
      </ContentStyled>
      {/* End of AppStyles styled component */}
    </AppStyles>
  );
};

// Export Home
export default Home;
