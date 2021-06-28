import { Row, Col } from "react-bootstrap";
const AboutMe = () => {
  return (
    <Row className="main main-aboutme">
      <Col md="4">
        <h3>Autonomy</h3>
        <p>I'm comfortable with problem-solving alone for hours at a time.</p>
      </Col>
      <Col md="4">
        <h3>Organization</h3>
        <p>
          I've created the habit of documenting the code as I write it,
          personally it's helped me get back to projects after months off.
        </p>
      </Col>
      <Col md="4">
        <h3>Creativity</h3>
        <p>
          Helps solving some problems. A fair portion of my free-time is spent
          on creative work, either drawing or writing.
        </p>
      </Col>
    </Row>
  );
};
export default AboutMe;
