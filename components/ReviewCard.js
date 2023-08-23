import styles from "../app/page.module.css";
import { Badge, Button, Stack, Accordion } from "react-bootstrap";
import AnonProfileModal from "./AnonProfileModal";
import AccordionBody from "react-bootstrap/AccordionBody";
import CommentButton from "./CommentButton";
import { useState } from "react";
import { useEffect } from "react";
import fetchWrapper from "@/pages/api/fetchWrapper";

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
  const [profile, setProfile] = useState([]);

  const getProfileInfo = async () => {
    try {
      const url = "/users/" + props.reviewData.userID;
      const response = await fetchWrapper.get(url);

      const jsonData = response.data;
      console.log(jsonData);
      setProfile(jsonData);
      // mark that we got the data
      // setHasFetchedData(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    console.log("Getting profile");
    getProfileInfo();
  }, [profile.name]);

  if (profile.length < 1) {
    return <div></div>;
  }

  return (
    <div className={styles.reviewCardContainer}>
      <img src="/Review.png" height={50} width={50} alt="Review Card" />
      <h3 style={{ display: "inline", marginLeft: "10px" }}>
        {props.reviewData.coursenumber}
      </h3>
      <div>
        Review By:{" "}
        <AnonProfileModal
          userData={profile}
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
          {checkForTurtleClubStatus(profile.inTurtleClub)}
          {checkForFullTimeStatus(profile.fullTimeStudentStatus)}
        </Stack>
      </div>
      <br />
      <div>{props.reviewData.content}</div>
      <br />
      <div style={{ marginTop: "auto" }}>
        <Stack direction="horizontal" gap={2}>
          <div className="p-2">
            <Badge bg="primary">
              Difficulty: {props.reviewData.difficulty}/5
            </Badge>
            <Badge bg="primary">Rating: {props.reviewData.rating}/5</Badge>
            <Badge bg="primary">
              {props.reviewData.weeklyHours} hours per week
            </Badge>
          </div>
          <div className="p-2 ms-auto">
            Course Pairings:
            {props.coursePairings.map((pairing) => {
              if (pairing.pairingRec == -1) {
                return (
                  <Badge key={pairing.courseID} bg="danger">
                    {" "}
                    {pairing.courseID}{" "}
                  </Badge>
                );
              } else if (pairing.pairingRec == 0) {
                return (
                  <Badge key={pairing.courseID} bg="warning">
                    {" "}
                    {pairing.courseID}{" "}
                  </Badge>
                );
              } else {
                return (
                  <Badge key={pairing.courseID} bg="success">
                    {" "}
                    {pairing.courseID}{" "}
                  </Badge>
                );
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

              if (
                parseInt(reply.parentID, 10) ===
                parseInt(props.reviewData.reviewID)
              ) {
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
