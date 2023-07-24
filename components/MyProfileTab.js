import { Button, Badge, Col, Row } from "react-bootstrap";
import styles from "../app/page.module.css";
import Link from "next/link";

export default function MyProfileTab(props) {
  return (
    <div>
      <div className={styles.rightAlignButton}>
        <Button href="/editProfile">Edit Profile</Button>
      </div>
      <div>
        <h5 className={styles.centerText}>Hello, {props.userData.name}!</h5>
        <h7 className={styles.centerText}>AKA (your anonymous name):</h7>
        <h7 className={styles.centerText}>{props.userData.anonName}</h7>
        <br></br>
        <p>Expected Graduation: {props.userData.expectedGraduation}</p>
        <p>Industry: {props.userData.industry}</p>
        <p>
          Work Status:{" "}
          {props.userData.workStatusID == 2 ? "Full-Time" : "Part-Time"}
        </p>
        <p>
          Turtle or Non-turtle:{" "}
          {props.userData.inTurtleClub == true ? "Turle" : "Non-Turtle"}
        </p>
        <div>
          Courses Completed:
          <Row xs={1} md={5}>
            {props.courseData.map((course) => {
              return (
                <Col>
                  <h5>
                    <Badge bg="success" key={course.courseID}>
                      {course.courseID}
                    </Badge>
                  </h5>
                </Col>
              );
            })}
            {props.currentCourseData.map((course) => {
              return (
                <Col>
                  <h5>
                    <Badge bg="warning" key={course.courseID}>
                      {course.courseID}
                    </Badge>
                  </h5>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}
