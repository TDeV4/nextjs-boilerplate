import styles from "../app/page.module.css";
import { Badge, Button, Stack } from "react-bootstrap";
import AnonProfileModal from "./AnonProfileModal";

function checkForFinalGrade(finalGrade) {
  if (finalGrade != null) {
    return <Badge bg="secondary">Final Grade: {finalGrade}</Badge>;
  }
}

export default function ReviewCard(props) {
  console.log("Review Card made");
  return (
    <div className={styles.reviewCardContainer}>
      <img src="/Review.png" height={50} width={50} alt="Review Card" />
      <h3 style={{ display: "inline", marginLeft: "10px" }}>
        {props.reviewData.courseNumber}: {props.reviewData.courseName}
      </h3>
      <div>
        Review By: <AnonProfileModal userData={props.userData} />
      </div>
      <br />
      <div>
        <Stack direction="horizontal" gap={2}>
          <Badge bg="secondary">{props.reviewData.semester}</Badge>
          <Badge bg="secondary">{props.reviewData.professor}</Badge>
          {checkForFinalGrade(props.reviewData.finalGrade)}
        </Stack>
      </div>
      <br />
      <div>{props.review.content}</div>
      <br />
      <div style={{ marginTop: "auto" }}>
        <Stack direction="horizontal" gap={2}>
          <Badge bg="primary">
            Difficulty: {props.reviewData.difficulty}/5
          </Badge>
          <Badge bg="primary">Rating: {props.reviewData.rating}/5</Badge>
          <Badge bg="primary">
            Rating: {props.reviewData.weeklyHours} hours per week
          </Badge>
        </Stack>
      </div>
    </div>
  );
}
