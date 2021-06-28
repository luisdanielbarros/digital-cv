import { useSpring, animated } from "react-spring";
import Profile from "./profile";
import AboutMe from "./aboutme";
import Skills from "./skills";
const Main = () => {
  const Spring = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={Spring}>
      <Profile />
      <AboutMe />
      <Skills />
    </animated.div>
  );
};
export default Main;
