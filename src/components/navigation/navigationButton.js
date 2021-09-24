import { Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

const NavigationButton = ({ path, text }) => {
  const Spring = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={Spring} className="navigationButtons">
      <Link to={`/${path}`}>
        <Button>{text}</Button>
      </Link>
    </animated.div>
  );
};
export default NavigationButton;
