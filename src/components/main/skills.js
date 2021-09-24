import { Row, Col, ProgressBar } from "react-bootstrap";
const Skills = () => {
  const mySkills = [
    ["HTML", 87, "language", "1 year"],
    ["CSS", 87, "language", "1 year"],
    ["JavaScript", 75, "language", "1 year"],
    ["PHP", 75, "language", "1 year"],
    ["MySQL", 75, "language", "1 year"],
    ["React", 62, "framework wish", "none"],
    ["Redux", 62, "plugin-library", "none"],
    ["WordPress", 75, "cms", "1 year"],
    ["WooCommerce", 62, "plugin-library", "1 year"],
    ["C#", 87, "language", "none"],
  ].sort((a, b) => b[0] < a[0]);
  const showSkills = () =>
    mySkills.map((val) => (
      <>
        <Col md="2" key={`${val[0]}-1`}>
          <p className={`name ${val[2]}`}>{val[0]}</p>
          <ProgressBar
            className="value"
            now={val[1]}
            label={`${val[1]}%`}
            srOnly
          />
          <p className={`detail`}>{val[3]}</p>
        </Col>
        <Col md="1" key={`${val[0]}-2`}></Col>
      </>
    ));
  return (
    <Row className="main main-skills">
      <Row>
        <Col md="12">
          <h3>Skills</h3>
        </Col>
      </Row>
      <Row className="skill-list">{showSkills()}</Row>
      <Row className="align-self-end">
        <Col>
          <div className="dictionary">
            <div>
              <p className="name language">Programming language</p>
              <p className="name framework">Framework</p>
              <p className="name plugin-library">Plugin or Library</p>
              <p className="name cms">CMS or Content Management System</p>
              <p className="name wish">Goal</p>
            </div>
            <ProgressBar
              className="value"
              now={50}
              label={`Knowledge`}
              srOnly
            />
            <p className={`detail`}>Professional-only experience</p>
          </div>
        </Col>
      </Row>
    </Row>
  );
};
export default Skills;
