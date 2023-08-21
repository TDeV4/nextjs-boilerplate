import { Modal, Button, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useState, useEffect } from "react";
import styles from "../app/page.module.css";
import TimezonePicker from "react-bootstrap-timezone-picker";
import "react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css";
import fetchWrapper from "../pages/api/fetchWrapper";

export default function EditProfile(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {};

  const startYearOptions = [];
  for (let i = 2018; i <= new Date().getFullYear(); i++) {
    startYearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const endYearOptions = [];
  for (let i = 2020; i <= new Date().getFullYear() + 5; i++) {
    endYearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const [courses, setCourses] = useState([]);

  const getCourseStats = async () => {
    try {
      const response = await fetchWrapper.get("/courses/");

      const jsonData = response.data;
      // console.log(jsonData);
      setCourses(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    console.log("Getting course stats");
    getCourseStats();
  }, []);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className={styles.rightAlignButton}
      >
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingName"
              label="Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Name"
                defaultValue={props.userData.name}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingAnonName"
              label="Anonymous Name"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                defaultValue={props.userData.anonName}
                disabled
                readOnly
              />
            </FloatingLabel>
            <TimezonePicker
              absolute={false}
              defaultValue={props.userData.timeZone}
              placeholder="Select timezone..."
              required
            />
            <Row>
              <Col>
                <FloatingLabel
                  controlId="startYear"
                  label="Start Year"
                  className="mb-3"
                >
                  <Form.Select required>
                    <option key="blankChoice" hidden value="" />
                    {startYearOptions}
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="expectedGraduationSemester"
                  label="Expected Graduation Semester"
                  className="mb-3"
                >
                  <Form.Select>
                    <option key="blankChoice" hidden value="" />
                    <option>Fall</option>
                    <option>Spring</option>
                    <option>Summer</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="expectedGraduationYear"
                  label="Expected Graduation Year"
                  className="mb-3"
                >
                  <Form.Select required>
                    <option key="blankChoice" hidden value="" />
                    {endYearOptions}
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel
              controlId="floatingIndustry"
              label="Industry"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Industry"
                defaultValue={props.userData.industry}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingEducation"
              label="Education"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Education"
                defaultValue={props.userData.education}
              />
            </FloatingLabel>
            <Form.Label>Work Status</Form.Label>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Full-Time"
                name="group1"
                type="radio"
                id="2"
                defaultChecked={
                  props.userData.workStatus === "currently part time"
                }
              />
              <Form.Check
                inline
                label="Part-Time"
                name="group1"
                type="radio"
                id="1"
                defaultChecked={props.userData.workStatus == 1}
              />
              <Form.Check
                inline
                label="Full-Time Student"
                name="group1"
                type="radio"
                id="0"
                defaultChecked={props.userData.workStatus == 0}
              />
            </div>
            <Form.Label>Turtle Club Status</Form.Label>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="In Turtle Club"
                name="group2"
                type="radio"
                id="true"
                defaultChecked={props.userData.inTurtleClub}
              />
              <Form.Check
                inline
                label="Not In Turtle Club"
                name="group2"
                type="radio"
                id="false"
                defaultChecked={!props.userData.inTurtleClub}
              />
            </div>
            <Form.Label>Courses Taken</Form.Label>
            <div key={`inline-checks`} className="mb-3">
              {courses.map((course) => {
                var keyValue = course.courseID + "taken";
                return (
                  <Form.Check
                    inline
                    key={keyValue}
                    label={course.coursenumber}
                    name="classesTaken"
                    type="checkbox"
                    id={course.courseID}
                    defaultChecked={props.userData.coursetaken.includes(
                      course.courseID
                    )}
                  />
                );
              })}
            </div>
            <Form.Label>Courses Currently Being Taken</Form.Label>
            <div key={`inline-checks`} className="mb-3">
              {courses.map((course) => {
                var keyValue = course.courseID + "currentlyTaking";
                return (
                  <Form.Check
                    inline
                    key={keyValue}
                    label={course.coursenumber}
                    name="classesTaken"
                    type="checkbox"
                    id={course.courseID}
                    defaultChecked={props.userData.coursetaking.includes(
                      course.courseID
                    )}
                  />
                );
              })}
            </div>
            <br></br>
            <Form.Label>
              *Blue means it is enabled / Gray means it is disabled*
            </Form.Label>
            <Form.Check // prettier-ignore
              type="switch"
              id="mcitEmailNotifications"
              label="Enable email notifications from MCITCentral"
              defaultChecked={props.userData.mcitEmailNotifications}
            />
            <Form.Check // prettier-ignore
              type="switch"
              id="mcitConnectEnabled"
              label="Enable MCIT Connect"
              defaultChecked={props.userData.mcitConnectEnable}
            />
            <Form.Check // prettier-ignore
              type="switch"
              id="mcitConnectNotifications"
              label="Enable MCIT Connect email notifications"
              defaultChecked={props.userData.mcitConnectEmailNotifications}
            />
            <br />
            <button>Submit Changes</button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
