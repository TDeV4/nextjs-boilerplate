import styles from "../app/page.module.css";
import { Badge, Button, Stack, Accordion } from "react-bootstrap";
import AnonProfileModal from "./AnonProfileModal";
import AccordionBody from "react-bootstrap/AccordionBody";
import CommentButton from "./CommentButton";

function checkForFinalGrade(finalGrade) {
  if (finalGrade != null) {
    return <Badge bg="secondary">Final Grade: {finalGrade}</Badge>;
  }
}

function checkForTurtleClubStatus(inTurtleClub) {
  if (inTurtleClub) {
    return <Badge bg="info">In Turtle Club</Badge>;
  }
}

function checkForFullTimeStatus(fullTimeStatus) {
  if (fullTimeStatus) {
    return <Badge bg="info">Full Time Student</Badge>;
  }
}

export default function ReviewCard(props) {
  return (
    <div className={styles.reviewCardContainer}>
      <img src="/Review.png" height={50} width={50} alt="Review Card" />
      <h3 style={{ display: "inline", marginLeft: "10px" }}>
        {props.reviewData.courseNumber}: {props.reviewData.courseName}
      </h3>
      <div>
        Review By:{" "}
        <AnonProfileModal
          userData={props.userData}
          reviewReplyData={props.reviewReplyData}
        />
      </div>
      <br />
      <div>
        <Stack direction="horizontal" gap={2}>
          <Badge bg="secondary">
            {props.reviewData.semester} {props.reviewData.year}
          </Badge>
          <Badge bg="secondary">{props.reviewData.professor}</Badge>
          {checkForFinalGrade(props.reviewData.finalGrade)}
          {checkForTurtleClubStatus(props.userData.inTurtleClub)}
          {checkForFullTimeStatus(props.userData.fullTimeStudentStatus)}
        </Stack>
      </div>
      <br />
      <div>{props.review.content}</div>
      <br />
      <div style={{ marginTop: "auto" }}>
        <Stack direction="horizontal" gap={2}>
          <div className="p-2">
            <Badge bg="primary">
              Difficulty: {props.reviewData.difficulty}/5
            </Badge>
            <Badge bg="primary">Rating: {props.reviewData.rating}/5</Badge>
            <Badge bg="primary">
              Rating: {props.reviewData.weeklyHours} hours per week
            </Badge>
          </div>
          <div className="p-2 ms-auto">
            Course Pairings:
            {props.coursePairings.map((pairing) => {
              if (pairing.pairingRec == -1) {
                return <Badge bg="danger"> {pairing.courseID} </Badge>;
              } else if (pairing.pairingRec == 0) {
                return <Badge bg="warning"> {pairing.courseID} </Badge>;
              } else {
                return <Badge bg="success"> {pairing.courseID} </Badge>;
              }
            })}
          </div>
        </Stack>
      </div>
      <br />
      <div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Replies</Accordion.Header>
            {props.reviewReplyData.map((reply) => {
              if (reply.parentID === null) {
                return;
              }

              if (reply.parentID === props.reviewData.reviewID) {
                return (
                  <Accordion.Body key={reply.reviewID}>
                    <h5>
                      {reply.userID} - {reply.dateOfReviewReply}
                    </h5>
                    <p>{reply.content}</p>
                  </Accordion.Body>
                );
              }
            })}
            <AccordionBody>
              <CommentButton reviewID={props.reviewData.reviewID} />
            </AccordionBody>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
