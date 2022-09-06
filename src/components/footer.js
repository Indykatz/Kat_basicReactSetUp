// Called in App.js

// Import styled componets from styles footer
import { FooterH4Styled, FooterStyled } from "../styles/footer.styles";

// footer function
const Footer = () => {
  return (
    // FooterStled component
    <FooterStyled>
      {/* FooterH4Styled component */}
      <FooterH4Styled>Footer Banner</FooterH4Styled>
      {/* end of styles */}
    </FooterStyled>
  );
};

// Export footer
export default Footer;
