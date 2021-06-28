import { Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import profilePicture from "../../media/profile-picture.jpg";
import logoLinktree from "../../media/logo-linktree.svg";
import logoLinkedin from "../../media/logo-linkedin.svg";
import logoGithub from "../../media/logo-github.svg";
import logoBehance from "../../media/logo-behance.svg";
import logoArtstation from "../../media/logo-artstation.svg";
import logoUnity from "../../media/logo-unity.svg";
import logoGoodreads from "../../media/logo-goodreads.png";
const Profile = () => {
  const yearsOfExperience = useSpring({ val: 1, from: { val: 0 } });
  const websitesDone = useSpring({ val: 4, from: { val: 0 } });

  const showYearsOfExperience = () => {
    return (
      <p>
        <animated.span className="number">
          {yearsOfExperience.val.interpolate(
            (val) => Math.floor(val) + " year"
          )}
        </animated.span>{" "}
        of experience in web development.
      </p>
    );
  };
  const showWebsitesDOne = () => {
    return (
      <p>
        <animated.span className="number">
          {websitesDone.val.interpolate((val) => Math.floor(val) + " websites")}
        </animated.span>{" "}
        developed professionally.
      </p>
    );
  };
  return (
    <Row className="main main-profile">
      <Col md="4" className="main-profile-graphics">
        <img className="profile-picture" src={profilePicture} alt="" />
      </Col>
      <Col md="8" className="main-profile-content">
        <Row className="main-profile-introduction">
          <Col>
            <h2 className="title">Hello!</h2>
            <h3 className="subtitle">
              I'm <span>Luís,</span>
            </h3>
            <p>
              an IT Student aspiring to work as a<span> React Developer.</span>
            </p>
          </Col>
        </Row>
        <Row className="main-profile-experience">
          <Col>{showYearsOfExperience()}</Col>
          <Col>{showWebsitesDOne()}</Col>
        </Row>
        <Row className="main-profile-networks">
          <Row>
            <Col>
              <h3>
                <span>Portfolios</span>
              </h3>
            </Col>
          </Row>
          <Row className="networkList">
            <Col>
              <a href="https://linktr.ee/luisdanielbarros">
                <img src={logoLinktree} alt="" />
                <p>LinkTree</p>
              </a>
            </Col>
            <Col>
              <a href="https://www.linkedin.com/in/luisdanielbarros/">
                <img src={logoLinkedin} alt="" />
                <p>LinkedIn</p>
              </a>
            </Col>
            <Col>
              <a href="https://github.com/luisdanielbarros">
                <img
                  src={logoGithub}
                  alt=""
                  style={{ filter: "invert(100%)" }}
                />
                <p>Github</p>
              </a>
            </Col>
            <Col>
              <a href="https://www.behance.net/luisdanielbarros">
                <img src={logoBehance} alt="" />
                <p>Behance</p>
              </a>
            </Col>
            <Col>
              <a href="https://headofmany.artstation.com/">
                <img src={logoArtstation} alt="" />
                <p>ArtStation</p>
              </a>
            </Col>
            <Col>
              <a href="https://alexlire.github.io/lifelane/">
                <img src={logoUnity} alt="" />
                <p>Unity</p>
              </a>
            </Col>
            <Col>
              <a href="https://www.goodreads.com/user/show/121281229-lu-s-barros">
                <img src={logoGoodreads} alt="" />
                <p>Goodreads</p>
              </a>
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  );
};
export default Profile;
