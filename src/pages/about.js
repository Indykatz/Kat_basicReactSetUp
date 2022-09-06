// ContentItem component from component folder
import ContentItem from "../components/contentItem";

// Styles components from styles folder app.styles
import { AppStyles, ContentStyled, Header1Styled } from "../styles/app.styles";

// About page function
const About = () => {
  return (
    // AppStyles styled component
    <AppStyles>
      {/* ContentStyled styled component */}
      <ContentStyled>
        {/* Header1StyledComponent */}
        <Header1Styled>About</Header1Styled>
        {/* ContentItem styled component */}
        <ContentItem />
        {/* End of ContentStyled styled component */}
      </ContentStyled>
      {/* End of AppStyles styled component */}
    </AppStyles>
  );
};

// export About used in App.js
export default About;
