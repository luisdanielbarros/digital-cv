import { Row, Col, Toast } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const Next = () => {
  const Spring = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <Row className="next">
      <Col>
        <animated.div style={Spring} className="next-content">
          <h2 className="title">Still in development!</h2>
          <h3 className="subtitle">
            <span>Thank you</span> for passing by.
          </h3>
        </animated.div>
      </Col>
    </Row>
  );
};
export default Next;
