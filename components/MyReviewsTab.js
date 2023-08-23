import { Button } from "react-bootstrap";
import styles from "../app/page.module.css";
import CreateReview from "./CreateReview";
// import React, { Component, useState } from "react";
import ReviewCard from "./ReviewCard";
import EditReview from "./EditReview";
import fetchWrapper from "../pages/api/fetchWrapper";
import { useEffect, useState } from "react";

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
    semester: "Fall",
    year: "2021",
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
    semester: "Spring",
    year: "2022",
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

function findRelevantCoursePairings(reviewID) {
  var coursePairings = [];

  DUMMY_USER_COURSE_PAIRING.map((pairing) => {
    if (pairing.reviewID == reviewID) {
      coursePairings.push(pairing);
    }
  });

  return coursePairings;
}

export default function MyReviewsTab(props) {
  const [user, setUser] = useState([]);

  //const { data: session, status } = useSession();
  const [reviews, setCourse] = useState([]);

  // get and set the fetched data only once
  // const [hasFetchedData, setHasFetchedData] = useState(false);

  const getMyReviews = async () => {
    try {
      const userIdResponse = await fetchWrapper.get("/users/getuserid");
      const userID = userIdResponse.data.userID;

      const url = "/reviews/byuser/" + userID;

      // const fetcher = fetchWrapper();
      const response = await fetchWrapper.get(url);
      const jsonData = response.data;

      setCourse(jsonData);
      // mark that we got the data
      // setHasFetchedData(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    //console.log("Getting my course reviews");
    getMyReviews();
  }, []);

  const [createReviewIsOpen, setCreateReviewIsOpen] = useState(false);

  function createReview() {
    setCreateReviewIsOpen(true);
  }

  // var reviewReplyData = DUMMY_REVIEW_REPLY_DATA;
  // var reviewData = DUMMY_REVIEW_DATA;

  return (
    <div>
      <h1 style={{ display: "inline", marginLeft: "10px", flex: "1" }}>
        My Reviews
      </h1>
      <div style={{ float: "right" }}>
        <CreateReview />
      </div>
      {reviews.map((review) => {
        if (review.parentID === null) {
          // var reviewDataPassThrough;
          // reviewData.map((reviewData) => {
          //   if (review.reviewID === reviewData.reviewID) {
          //     reviewDataPassThrough = reviewData;
          //   }
          // });
          return (
            <div key={review.reviewID}>
              <ReviewCard
                key={review.reviewID}
                reviewData={review}
                reviewReplyData={reviews}
                coursePairings={findRelevantCoursePairings(review.reviewID)}
              />
              <div className={styles.rightAlignButton}>
                <EditReview
                  reviewData={review}
                  coursePairings={findRelevantCoursePairings(review.reviewID)}
                  courseData={DUMMY_COURSE_DATA}
                />
              </div>
              <br />
            </div>
          );
        }
      })}
    </div>
  );
}
