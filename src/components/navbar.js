// Called in App.js

// Link from react router dom provides links to each url
// html used <a href="url/path">URL</a>
import { Link } from "react-router-dom";

// Styled components from Navbar styled components folder
import { NavbarStyled, NavItemStyled } from "../styles/navbar.styles";

// The Navbar function
const Navbar = () => {
  // The navbar items in a list
  const navbarList = ["Home", "About"];

  return (
    // NavbarStyled component
    <NavbarStyled>
      {/* Mapping the navbar item list to each item */}
      {navbarList.map((navbarItem, i) => {
        let path = "/";
        if (navbarItem !== "Home") {
          path = "/" + navbarItem;
        }
        return (
          // NavbarItemStyled styled component
          <NavItemStyled>
            {/* The Link to each path */}
            <Link to={path} key={i}>
              {navbarItem}
            </Link>
            {/* End of Styles */}
          </NavItemStyled>
        );
      })}
      {/* End of Styles */}
    </NavbarStyled>
  );
};

// Export the Navbar
export default Navbar;
