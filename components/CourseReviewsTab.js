import CreateReview from "./CreateReview";
import ReviewCard from "./ReviewCard";
import fetchWrapper from "../pages/api/fetchWrapper";
import { useEffect, useState } from "react";

function findRelevantCoursePairings(reviewID) {
  var coursePairings = [];

  DUMMY_USER_COURSE_PAIRING.map((pairing) => {
    if (pairing.reviewID == reviewID) {
      coursePairings.push(pairing);
    }
  });

  return coursePairings;
}

export default function CourseReviewsTab(props) {
  //const { data: session, status } = useSession();
  const [reviews, setCourse] = useState([]);

  // get and set the fetched data only once
  // const [hasFetchedData, setHasFetchedData] = useState(false);

  const getCourseReviews = async () => {
    try {
      // const fetcher = fetchWrapper();
      const response = await fetchWrapper.get(
        "/reviews/bycourse/" + props.courseID
      );
      const jsonData = response.data;

      setCourse(jsonData);
      // mark that we got the data
      // setHasFetchedData(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCourseReviews();
  });

  const [createReviewIsOpen, setCreateReviewIsOpen] = useState(false);

  function createReview() {
    setCreateReviewIsOpen(true);
  }

  return (
    <div>
      <h1 style={{ display: "inline", marginLeft: "10px", flex: "1" }}>
        Reviews
      </h1>
      <div style={{ float: "right" }}>
        <CreateReview />
      </div>
      {reviews.map((review) => {
        if (review.parentID === null) {
          //query and get the user data for that review which stored in reviewdatapassthrough, pass that in to userdata
          return (
            <div key={review.reviewID}>
              <ReviewCard
                key={review.reviewID}
                reviewData={review}
                reviewReplyData={reviews}
              />
              <br />
            </div>
          );
        }
      })}
    </div>
  );
}
