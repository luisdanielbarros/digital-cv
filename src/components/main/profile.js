import { useState } from "react";
import { Row, Col, Toast } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import logoLinktree from "../../media/logo-linktree.svg";
import logoLinkedin from "../../media/logo-linkedin.svg";
import logoGithub from "../../media/logo-github.svg";
import logoBehance from "../../media/logo-behance.svg";
import logoArtstation from "../../media/logo-artstation.svg";
import logoUnity from "../../media/logo-unity.svg";
import logoGoodreads from "../../media/logo-goodreads.png";
import ThreeGraphics from "../graphics/threeGraphics.js";
import NavigationButton from "../navigation/navigationButton.js";
const Profile = () => {
  //Spring
  const Spring = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  const yearsOfExperience = useSpring({ val: 1, from: { val: 0 } });
  const websitesDone = useSpring({ val: 4, from: { val: 0 } });
  //Toasts
  const [showTipA, setShowTipA] = useState(true);
  const toggleTipA = () => setShowTipA(!showTipA);
  //JSX Generators
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
      {/*Three Graphics*/}
      <ThreeGraphics />
      {/*Toasts*/}
      <animated.div style={Spring} className="myToasts">
        <Toast show={showTipA} onClose={toggleTipA}>
          <Toast.Header></Toast.Header>
          <Toast.Body>
            You can move around 3d scenes using your mouse (left & right click +
            wheel).
          </Toast.Body>
        </Toast>
      </animated.div>
      {/*Navigation Button*/}
      <NavigationButton path="next" text="Next" />
      {/*Profile Content*/}
      <Col className="main-profile-content">
        <Row className="main-profile-introduction">
          <Col>
            <animated.div style={Spring}>
              <h2 className="title">Hello!</h2>
              <h3 className="subtitle">
                I'm <span>Luís,</span>
              </h3>
              <p>
                an IT Student aspiring to work as a
                <span> React Developer.</span>
              </p>
            </animated.div>
          </Col>
        </Row>
        <Row className="main-profile-experience">
          <Col>{showYearsOfExperience()}</Col>
          <Col>{showWebsitesDOne()}</Col>
        </Row>
        <Row className="main-profile-networks">
          <Row>
            <Col>
              <animated.div style={Spring}>
                <h3>
                  <span>Portfolios</span>
                </h3>
              </animated.div>
            </Col>
          </Row>
          <Row className="networkList">
            <Col>
              <animated.div style={Spring}>
                <a target="_blank" href="https://linktr.ee/luisdanielbarros">
                  <img src={logoLinktree} alt="" />
                  <p>LinkTree</p>
                </a>
              </animated.div>
            </Col>
            <Col>
              <animated.div style={Spring}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/luisdanielbarros/"
                >
                  <img src={logoLinkedin} alt="" />
                  <p>LinkedIn</p>
                </a>
              </animated.div>
            </Col>
            <Col>
              <animated.div style={Spring}>
                <a target="_blank" href="https://github.com/luisdanielbarros">
                  <img
                    src={logoGithub}
                    alt=""
                    style={{ filter: "invert(100%)" }}
                  />
                  <p>Github</p>
                </a>
              </animated.div>
            </Col>
            <Col>
              <animated.div style={Spring}>
                <a
                  target="_blank"
                  href="https://www.behance.net/luisdanielbarros"
                >
                  <img src={logoBehance} alt="" />
                  <p>Behance</p>
                </a>
              </animated.div>
            </Col>
            <Col>
              <animated.div style={Spring}>
                <a target="_blank" href="https://headofmany.artstation.com/">
                  <img src={logoArtstation} alt="" />
                  <p>ArtStation</p>
                </a>
              </animated.div>
            </Col>
            <Col>
              <animated.div style={Spring}>
                <a target="_blank" href="https://alexlire.github.io/lifelane/">
                  <img src={logoUnity} alt="" />
                  <p>Unity</p>
                </a>
              </animated.div>
            </Col>
            <Col>
              <animated.div style={Spring}>
                <a
                  target="_blank"
                  href="https://www.goodreads.com/user/show/121281229-lu-s-barros"
                >
                  <img src={logoGoodreads} alt="" />
                  <p>Goodreads</p>
                </a>
              </animated.div>
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  );
};
export default Profile;
