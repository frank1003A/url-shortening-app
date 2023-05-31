import logo from "../../images/logo.svg";
import Button from "../buttons/Button";
import IconButton from "../buttons/Iconbutton";

import { useState } from "react";
import ham from "../../images/burger-menu-svgrepo-com.svg";
import Menu from "../menu/Menu";
import MenuButton from "../menu/MenuButton";
import MenuList from "../menu/MenuList";
import MenuOption from "../menu/MenuOption";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <header>
      <div className="header-main">
        {/** Logo */}
        <img src={logo} alt="main-logo" />
        {/** Navbar */}
        <nav>
          <a href="https://github.com/frank1003A/url-shortening-app">
            Features
          </a>
          <a href="https://github.com/frank1003A/url-shortening-app">Pricing</a>
          <a href="https://github.com/frank1003A/url-shortening-app">
            Resources
          </a>
        </nav>
      </div>
      {/**action buttons */}
      <div className="action-buttons">
        <Button className="login-btn" type="text">
          Login
        </Button>
        <Button className="signup-btn" type="rounded">
          Sign Up
        </Button>
        <Menu>
          <MenuButton>
            <IconButton
              className="hamburger-icon"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img src={ham} alt="hamburger-icon" />
            </IconButton>
          </MenuButton>
          <MenuList handler={showMenu}>
            <MenuOption>Features</MenuOption>
            <MenuOption>Pricing</MenuOption>
            <MenuOption>Resources</MenuOption>
            <hr />
            <MenuOption>Login</MenuOption>
            <Button type="rounded">Sign Up</Button>
          </MenuList>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
