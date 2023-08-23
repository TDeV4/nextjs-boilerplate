import { Modal, Button, Badge, Row, Col, Accordion } from "react-bootstrap";
import { useState } from "react";
import ReviewCard from "./ReviewCard";
import styles from "../app/page.module.css";

const DUMMY_COURSES_TAKEN_DATA = [
  {
    userID: 1,
    courseID: 591,
  },
  {
    userID: 1,
    courseID: 592,
  },
  {
    userID: 1,
    courseID: 593,
  },
  {
    userID: 1,
    courseID: 594,
  },
  {
    userID: 1,
    courseID: 595,
  },
  {
    userID: 1,
    courseID: 596,
  },
];

const DUMMY_REVIEW_DATA = [
  {
    courseID: 591,
    courseNumber: "591",
    courseName: "Introduction to Software Development",
    reviewID: 1,
    semester: "Fall 2020",
    professor: "Brandon Krakowsky",
    finalGrade: "A",
    difficulty: 2,
    rating: 4,
    weeklyHours: 10,
  },
  {
    courseID: 592,
    courseNumber: "592",
    courseName: "Mathematical Foundations of Computer Science",
    reviewID: 10,
    semester: "Spring 2021",
    professor: "Val Tannen",
    finalGrade: null,
    difficulty: 4,
    rating: 3,
    weeklyHours: 22,
  },
];

const DUMMY_REVIEW_REPLY_DATA = [
  {
    reviewID: 1,
    parentID: null,
    userID: 1,
    dateOfReviewReply: "2021-01-01",
    content: "Review content goes here",
  },
  {
    reviewID: 3,
    parentID: 2,
    userID: 1,
    dateOfReviewReply: "2021-01-07",
    content: "Here is a response to a first layer reply.",
  },
  {
    reviewID: 10,
    parentID: null,
    userID: 1,
    dateOfReviewReply: "2021-08-07",
    content:
      "This course is difficult but extremely rewarding. The math is unlike most math classes I've taken before and my philosophy background was more useful than my math as this class primarily focuses on logic and explanation. Professor Tannen explained material thoroughly and clearly, however, attending/watching office hours is a must to get a complete understanding. I do think that the course itself provides enough information/practice to fully learn the subject but some students in the class prefer some youtube channels to better explain concepts. This is mainly personal preference and up to how you learn best. The workload is heavy and require discipline to not fall behind, especially for exam weeks as you typically have homework due alongside the exam. TAs are also extremely helpful/friendly and try to help you as best as they can, short of giving you the answer. Overall, this class provides a great introduction into how to think like a programmer and its themes recur throughout almost every class in the program.",
  },
];

const DUMMY_USER_COURSE_PAIRING = [
  {
    courseID: 592,
    reviewID: 1,
    pairingRec: 1,
  },
  {
    courseID: 593,
    reviewID: 1,
    pairingRec: -1,
  },
  {
    courseID: 595,
    reviewID: 10,
    pairingRec: 0,
  },
];

export default function AnonProfileModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var courseData = DUMMY_COURSES_TAKEN_DATA;
  var reviewReplyData = props.reviewReplyData;
  var reviewData = DUMMY_REVIEW_DATA;
  var pairingData = DUMMY_USER_COURSE_PAIRING;

  return (
    <>
      <Button variant="outline-dark" size="sm" onClick={handleShow}>
        {props.userData.anonName}
      </Button>{" "}
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.centerText}>
            Anonymous Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className={styles.centerText}>Name: {props.userData.anonName}</h3>
          <div className={styles.borderBox}>
            <h4 className={styles.centerText}>Profile Info</h4>
            <p>Expected Graduation: {props.userData.expectedGraduation}</p>
            <p>Industry: {props.userData.industry}</p>
            <p>
              Work Status:{" "}
              {props.userData.workStatusID == 2 ? "Full-Time" : "Part-Time"}
            </p>
            <p>
              Turtle or Non-turtle:{" "}
              {props.userData.inTurtleClub == true ? "Turtle" : "Non-Turtle"}
            </p>
            <div>
              Courses Completed:
              <Row xs={1} md={6}>
                {courseData.map((course) => {
                  return (
                    <Col key={course.courseID}>
                      <h5>
                        <Badge bg="primary">{course.courseID}</Badge>
                      </h5>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
          <h3 className={styles.centerText}>Reviews</h3>
          <div>
            {reviewReplyData.map((review) => {
              if (review.parentID === null) {
                return (
                  <div key={review.reviewID}>
                    <ReviewCard
                      key={review.reviewID}
                      reviewData={review}
                      userData={props.userData}
                      reviewReplyData={props.reviewReplyData}
                      coursePairings={pairingData}
                    />
                  </div>
                );
              }
            })}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
