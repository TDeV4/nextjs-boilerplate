import styles from "../app/page.module.css";
import Link from "next/link";

export default function IndividualCourseInfo(props) {
  return (
    <div>
      <div>
        <h5 className={styles.centerText}>Quick Facts and Resources</h5>
        <br></br>
        <p>Description: {props.courseData.description}</p>
        <p>Syllabus: {props.courseData.syllabus}</p>
        <p>Prerequisites: {props.preReqData.prereqID}</p>
        <p>Professors: {props.profData.professor}</p>
        <p>Textbooks: {props.courseData.textbooks}</p>
        <p>Supplemental Resources: {props.supData.resource}</p>
      </div>
    </div>
  );
}
