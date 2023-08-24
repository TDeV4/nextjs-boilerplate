import { Button } from "react-bootstrap";
import styles from "../app/page.module.css";
import CreateReview from "./CreateReview";
import DeleteReviewButton from "./DeleteReviewButton";
// import React, { Component, useState } from "react";
import ReviewCard from "./ReviewCard";
import EditReview from "./EditReview";
import fetchWrapper from "../pages/api/fetchWrapper";
import { useEffect, useState } from "react";

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
              />
              <div className={styles.rightAlignButton}>
                <EditReview reviewData={review} />{" "}
                <DeleteReviewButton reviewData={review} />
              </div>
              <br />
            </div>
          );
        }
      })}
    </div>
  );
}
