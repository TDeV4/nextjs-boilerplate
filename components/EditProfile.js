import { Modal, Button, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useState } from "react";
import styles from "../app/page.module.css";

export default function EditProfile(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {};

  var coursesTaken = [];
  props.coursesTaken.map((course) => {
    coursesTaken.push(course.courseID);
  });

  var currentCourses = [];
  props.currentCourseData.map((course) => {
    currentCourses.push(course.courseID);
  });

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className={styles.rightAlignButton}
      >
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
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
                required
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
            <FloatingLabel
              controlId="floatingIndustry"
              label="Industry"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                placeholder="Industry"
                defaultValue={props.userData.industry}
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
                defaultChecked={props.userData.workStatusID == 2}
              />
              <Form.Check
                inline
                label="Part-Time"
                name="group1"
                type="radio"
                id="1"
                defaultChecked={props.userData.workStatusID == 1}
              />
              <Form.Check
                inline
                label="Full-Time Student"
                name="group1"
                type="radio"
                id="0"
                defaultChecked={props.userData.workStatusID == 0}
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
              {props.allCourses.map((course) => {
                return (
                  <Form.Check
                    inline
                    label={course.courseID}
                    name="classesTaken"
                    type="checkbox"
                    id={course.courseID}
                    defaultChecked={coursesTaken.includes(course.courseID)}
                  />
                );
              })}
            </div>
            <Form.Label>Courses Currently Being Taken</Form.Label>
            <div key={`inline-checks`} className="mb-3">
              {props.allCourses.map((course) => {
                return (
                  <Form.Check
                    inline
                    label={course.courseID}
                    name="classesTaken"
                    type="checkbox"
                    id={course.courseID}
                    defaultChecked={currentCourses.includes(course.courseID)}
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
              id="writeReviewReminder"
              label="Enable reminders to write course reviews"
              defaultChecked={props.userData.mcitCentralEmailNotifications}
            />
            <Form.Check // prettier-ignore
              type="switch"
              id="mcitConnectNotifications"
              label="Enable email notifications to review replies"
              defaultChecked={props.userData.commentEmailNotifications}
            />
            <Form.Check // prettier-ignore
              type="switch"
              id="mcitConnectEnabled"
              label="Enable MCIT Connect"
              defaultChecked={props.userData.mcitConnectEnabled}
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
