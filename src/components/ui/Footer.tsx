/** LOGO */
import logo from "../../images/logo.svg";
/** SOCIAL ICONS */
import fbLogo from "../../images/icon-facebook.svg";
import instagramLogo from "../../images/icon-instagram.svg";
import pintLogo from "../../images/icon-pinterest.svg";
import twitterLogo from "../../images/icon-twitter.svg";

const Footer = () => {
  return (
    <footer>
      {/** Logo */}
      <img src={logo} alt="main-logo" />
      <div className="footer-links">
        <div className="links">
          <h4>Features</h4>
          <a href="#">Link Shortening</a>
          <a href="#">Branded Links</a>
          <a href="#">Analytics</a>
        </div>
        <div className="links">
          <h4>Features</h4>
          <a href="#">Link Shortening</a>
          <a href="#">Branded Links</a>
          <a href="#">Analytics</a>
        </div>
        <div className="links">
          <h4>Features</h4>
          <a href="#">Link Shortening</a>
          <a href="#">Branded Links</a>
          <a href="#">Analytics</a>
        </div>
      </div>
      <div className="icon-links">
        <img src={fbLogo} alt="fb-logo" />
        <img src={twitterLogo} alt="tw-logo" />
        <img src={pintLogo} alt="pnt-logo" />
        <img src={instagramLogo} alt="ins-logo" />
      </div>
    </footer>
  );
};

export default Footer;
