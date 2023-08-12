import styles from "../app/page.module.css";
import Link from "next/link";
import Table from 'react-bootstrap/Table';
import { Badge } from "react-bootstrap";


export default function IndividualCourseInfo(props) {
  //const data = props.DUMMY_REVIEW_DATA;

  //calculate the averages of all the reviews for a given course
  const difficulty = props.reviewData.map((review) => review.difficulty);
  const diffcultyAvg = difficulty.reduce((sum, current) => sum + current, 0) / difficulty.length;

  const rating = props.reviewData.map((review) => review.rating);
  const ratingAvg = rating.reduce((sum, current) => sum + current, 0) / rating.length;

  const weeklyHours = props.reviewData.map((review) => review.weeklyHours);
  const weeklyHoursAvg = weeklyHours.reduce((sum, current) => sum + current, 0) / weeklyHours.length;

  return (
    <div>
      <div>
      <h7 className={styles.centerText}>CIT {props.courseData.coursenumber} - {props.courseData.coursename}</h7>
        <Table striped bordered hover>
          <thead class={styles.centerText}>
            <tr>
              <th><h9>Difficulty: {diffcultyAvg}</h9></th>
              <th><h9>Workload: {weeklyHoursAvg}</h9></th>
              <th><h9>Rating: {ratingAvg}</h9></th>
              <th><h9># of Reviews: {difficulty.length}</h9></th>
            </tr>
          </thead>
        </Table>
        <h5 className={styles.centeredHeading}>Quick Facts and Resources</h5>
        <br></br>
        <p>Description: {props.courseData.description}</p>
        <p>Syllabus: <Link href={props.courseData.syllabus}>Link</Link></p>
        <p>Prerequisites: {props.courseData.prereqid}</p>
        <p>Professors: {props.courseData.professor}</p>
        <p>Textbooks: {props.courseData.textbooks}</p>
        <p>Supplemental Resources: {props.courseData.resource}</p>
        <p>Course Pairings: 
          {props.coursePairings.map((pairing) => {
            if (pairing.pairingRec == -1) {
              return <Badge bg="danger"> {pairing.coursenumber} </Badge>;
            } else if (pairing.pairingRec == 0) {
              return <Badge bg="warning"> {pairing.coursenumber} </Badge>;
            } else {
              return <Badge bg="success"> {pairing.coursenumber} </Badge>;
            }
          })}
        </p>
      </div>
    </div>
  );
}
