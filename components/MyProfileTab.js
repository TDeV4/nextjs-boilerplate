import { Button, Badge, Col, Row } from "react-bootstrap";
import styles from "../app/page.module.css";
import Link from "next/link";
import EditProfile from "./EditProfile";

export default function MyProfileTab(props) {
  return (
    <div>
      <div className={styles.rightAlignButton}>
        <EditProfile
          userData={props.userData}
          coursesTaken={props.courseData}
          currentCourseData={props.currentCourseData}
          allCourses={props.allCourses}
        />
      </div>
      <div>
        <h5 className={styles.centerText}>Hello, {props.userData.name}!</h5>
        <h7 className={styles.centerText}>AKA (your anonymous name):</h7>
        <h7 className={styles.centerText}>{props.userData.anonName}</h7>
        <br></br>
        <p>
          Expected Graduation: {props.userData.graduationSemester}{" "}
          {props.userData.graduationYear}
        </p>
        <p>Industry: {props.userData.industry}</p>
        <p>
          Work Status:{" "}
          {props.userData.workStatusID == 2
            ? "Full-Time"
            : props.userData.workStatusID == 1
            ? "Part-Time"
            : "Full-Time Student"}
        </p>
        <p>
          Turtle or Non-turtle:{" "}
          {props.userData.inTurtleClub == true ? "Turtle" : "Non-Turtle"}
        </p>
        <div>
          Courses Completed:
          <Row xs={1} md={5}>
            {props.courseData.map((course) => {
              return (
                <Col key={course.courseID}>
                  <h5>
                    <Badge bg="success">{course.courseID}</Badge>
                  </h5>
                </Col>
              );
            })}
            {props.currentCourseData.map((course) => {
              return (
                <Col key={course.courseID}>
                  <h5>
                    <Badge bg="warning">{course.courseID}</Badge>
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
