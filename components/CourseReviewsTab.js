import { Button } from "react-bootstrap";
import styles from "../app/page.module.css";
import CreateReview from "./CreateReview";
import React, { Component, useState } from "react";
import ReviewCard from "./ReviewCard";

const DUMMY_USER_DATA = [
  {
    userID: 1,
    name: "Tanner DeVore",
    anonName: "Purple Panda",
    timeZone: "CST",
    expectedGraduation: "Spring 2025",
    workStatusID: 2,
    industry: "Cyber-Security",
    fullTimeStudentStatus: false,
    inTurtleClub: false,
    alumniStatus: false,
    mcitCentralEmailNotifications: true,
    mcitConnectEmailNotifications: true,
    commentEmailNotifications: true,
    MCITConnectEnabled: true,
    email: "devoret@seas.upenn.edu",
    linkedinURL: "https://linkedin.com/in/tanner-devore",
    preferredContactMethod: "slack",
    bio: "Hello, I am a person who is in the MCIT Program and looking to connect.",
    education: "Bachelor of Arts in Political Science and Economics",
    internships: null,
    marketOutcome: null,
  },
  {
    userID: 2,
    name: "Alex Quan",
    anonName: "Green Elephant",
    timeZone: "PST",
    expectedGraduation: "Spring 2025",
    workStatusID: 2,
    industry: "Accounting",
    fullTimeStudentStatus: false,
    inTurtleClub: true,
    alumniStatus: false,
    mcitCentralEmailNotifications: true,
    mcitConnectEmailNotifications: true,
    commentEmailNotifications: true,
    MCITConnectEnabled: true,
    email: "alexquan@seas.upenn.edu",
    linkedinURL: "https://linkedin.com/in/alex10quan",
    preferredContactMethod: "slack",
    bio: "Hello, I am a person who is in the MCIT Program and looking to connect.",
    education: "Bachelor of Science in Business Administration",
    internships: null,
    marketOutcome: null,
  }
];

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
  {
    courseID: 595,
    professor: "Boon Thau Loo",
  },

];

const DUMMY_REVIEW_DATA = [
  {
    courseID: 595,
    courseNumber: "595",
    courseName: "Computer Systems Programming",
    reviewID: 1,
    semester: "Fall",
    year: "2021",
    professor: "Boon Thau Loo",
    finalGrade: "A",
    difficulty: 2,
    rating: 4,
    weeklyHours: 10,
  },
  {
    courseID: 595,
    courseNumber: "595",
    courseName: "Computer Systems Programming",
    reviewID: 10,
    semester: "Spring",
    year: "2022",
    professor: "Boon Thau Loo",
    finalGrade: null,
    difficulty: 4,
    rating: 3,
    weeklyHours: 22,
  },
  {
    courseID: 595,
    courseNumber: "595",
    courseName: "Computer Systems Programming",
    reviewID: 15,
    semester: "Spring",
    year: "2023",
    professor: "Boon Thau Loo",
    finalGrade: null,
    difficulty: 5,
    rating: 5,
    weeklyHours: 10,
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
  {
    reviewID: 15,
    parentID: null,
    userID: 2,
    dateOfReviewReply: "2021-01-01",
    content: "Review content goes here",
  },
];

const DUMMY_USER_COURSE_PAIRING = [
  {
    courseID: 594,
    reviewID: 1,
    pairingRec: 1,
  },
  {
    courseID: 592,
    reviewID: 1,
    pairingRec: -1,
  },
  {
    courseID: 541,
    reviewID: 10,
    pairingRec: 0,
  },
  {
    courseID: 596,
    reviewID: 15,
    pairingRec: -1,
  },
];

function findRelevantCoursePairings(reviewID) {
  var coursePairings = [];

  DUMMY_USER_COURSE_PAIRING.map((pairing) => {
    if (pairing.reviewID == reviewID) {
      coursePairings.push(pairing);
    }
  });

  return coursePairings;
}

export default function CourseReviewsTab() {
  const [createReviewIsOpen, setCreateReviewIsOpen] = useState(false);

  function createReview() {
    setCreateReviewIsOpen(true);
  }

  var reviewReplyData = DUMMY_REVIEW_REPLY_DATA;
  var reviewData = DUMMY_REVIEW_DATA;
  var userData = DUMMY_USER_DATA;

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
          var userDataPassThrough;
          reviewData.map((reviewData) => {
            if (review.reviewID === reviewData.reviewID) {
              reviewDataPassThrough = reviewData;
            }
          });
          userData.map((userData) => {
            if (review.userID === userData.userID) {
              userDataPassThrough = userData;
            }
          });          
          //query and get the user data for that review which stored in reviewdatapassthrough, pass that in to userdata
          return (
            <div key={review.reviewID}>
              <ReviewCard
                key={review.reviewID}
                review={review}
                reviewData={reviewDataPassThrough}
                userData={userDataPassThrough}
                reviewReplyData={reviewReplyData}
                coursePairings={findRelevantCoursePairings(review.reviewID)}
              />
            <br/>           
            </div>
          );
        }
      })}
    </div>
  );
}
