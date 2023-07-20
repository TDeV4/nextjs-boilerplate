import { Button } from "react-bootstrap";
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
          <ul>
            {props.courseData.map((course) => {
              return <li key={course.courseID}>CIT {course.courseID} </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
