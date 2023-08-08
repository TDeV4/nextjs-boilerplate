import { Button } from "react-bootstrap";
import styles from "../app/page.module.css";
import CreateReview from "./CreateReview";
import React, { Component, useState } from "react";
import ReviewCard from "./ReviewCard";

const DUMMY_COURSE_DATA = [
  {
    courseID: 591,
    courseName: "Introduction to Software Development",
  },
  {
    courseID: 592,
    courseName: "Mathematical Foundations of Computer Science",
  },
  {
    courseID: 593,
    courseName: "Introduction to Computer Systems",
  },
  {
    courseID: 594,
    courseName: "Data Structures and Software Design",
  },
];

const DUMMY_PROF_DATA = [
  {
    courseID: 591,
    professor: "Brandon Krakowsky",
  },
  {
    courseID: 592,
    professor: "Val Tannen",
  },
  {
    courseID: 593,
    professor: "Tom Farmer",
  },
  {
    courseID: 594,
    professor: "Nan Zheng",
  },
  {
    courseID: 594,
    professor: "Raphael Rubin",
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
    reviewID: 2,
    parentID: 1,
    userID: 2,
    dateOfReviewReply: "2021-01-07",
    content: "Here is a response to a review.",
  },
  {
    reviewID: 3,
    parentID: 1,
    userID: 1,
    dateOfReviewReply: "2021-01-09",
    content: "Here is a response to a reply",
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

export default function MyReviewsTab(props) {
  const [createReviewIsOpen, setCreateReviewIsOpen] = useState(false);

  function createReview() {
    setCreateReviewIsOpen(true);
  }

  var reviewReplyData = DUMMY_REVIEW_REPLY_DATA;
  var reviewData = DUMMY_REVIEW_DATA;

  return (
    <div>
      <h1 style={{ display: "inline", marginLeft: "10px", flex: "1" }}>
        Reviews
      </h1>
      <div style={{ float: "right" }}>
        <CreateReview
          courseData={DUMMY_COURSE_DATA}
          profData={DUMMY_PROF_DATA}
        />
      </div>
      {reviewReplyData.map((review) => {
        if (review.parentID === null) {
          var reviewDataPassThrough;
          reviewData.map((reviewData) => {
            if (review.reviewID === reviewData.reviewID) {
              reviewDataPassThrough = reviewData;
            }
          });
          return (
            <div key={review.reviewID}>
              <ReviewCard
                key={review.reviewID}
                review={review}
                reviewData={reviewDataPassThrough}
                userData={props.userData}
                reviewReplyData={reviewReplyData}
              />
              <div className={styles.rightAlignButton}>
                <Button reviewID={review.reviewID}>Edit Review</Button>
              </div>
              <br />
            </div>
          );
        }
      })}
    </div>
  );
}
