import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import iconPhone from "../../media/icon-phone.svg";
import iconMail from "../../media/icon-mail.svg";

const NavigationMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navigation-menu">
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
          <Nav.Item className="contacts">
            <h3>Contact Me!</h3>
            <div class="contactList">
              <a href="#">
                <img src={iconMail} alt="" />
                <span>luisdanielbarros</span>@protonmail.com
              </a>
              <a href="#">
                <img src={iconPhone} alt="" />
                <span>96</span>5 458 866
              </a>
            </div>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavigationMenu;
