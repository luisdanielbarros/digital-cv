import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import iconPhone from "../../media/icon-phone.svg";
import iconMail from "../../media/icon-mail.svg";

const NavigationMenu = () => {
  return (
    <Navbar expand="lg" className="navigation-menu">
      <LinkContainer to="/home">
        <Navbar.Brand>
          Digital
          <br />
          <span>CV</span>
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav justify activeKey="/home" className="navigation-menu-links">
          {/*Contacts*/}
          <Nav.Item className="contacts">
            <h3>Contact Me!</h3>
            <address className="contactList">
              <a href="mailto:luisdanielbarros@protonmail.com">
                <img src={iconMail} alt="" />
                <span>luisdanielbarros</span>@protonmail.com
              </a>
              <a href="tel:+351965458866">
                <img src={iconPhone} alt="" />
                <span>96</span>5 458 866
              </a>
            </address>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavigationMenu;
