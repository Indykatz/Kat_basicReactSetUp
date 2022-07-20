import { Link } from "react-router-dom";
import { NavbarStyled, NavItemStyled } from "../styles/navbar.styles";

const Navbar = () => {
  const navbarList = ["Home", "About"];

  return (
    <NavbarStyled>
      {navbarList.map((navbarItem, i) => {
        let path = "/";
        if (navbarItem !== "Home") {
          path = "/" + navbarItem;
        }
        return (
          <NavItemStyled>
            <Link to={path} key={i}>
              {navbarItem}
            </Link>
          </NavItemStyled>
        );
      })}
    </NavbarStyled>
  );
};

export default Navbar;
