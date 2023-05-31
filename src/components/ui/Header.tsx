import logo from "../../images/logo.svg";
import Button from "../buttons/Button";
import IconButton from "../buttons/Iconbutton";

import ham from "../../images/burger-menu-svgrepo-com.svg";

const Header = () => {
  return (
    <header>
      <div className="header-main">
        {/** Logo */}
        <img src={logo} alt="main-logo" />
        {/** Navbar */}
        <nav>
          <span>Features</span>
          <span>Pricing</span>
          <span>Resources</span>
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
        <IconButton className="hamburger-icon">
          <img src={ham} alt="hamburger-icon" />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
