import { Button, Form, FormLabel } from "react-bootstrap";
import { useState, useEffect } from "react";
import styles from "../app/page.module.css";
import fetchWrapper from "@/pages/api/fetchWrapper";

export default function CommentButton(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onFormChange = (e, updatedAt) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    console.log(name, value);
  };

  const [values, setValues] = useState({
    courseID: props.reviewData.courseID,
    professor: null,
    semester: null,
    finalGrade: null,
    difficulty: null,
    rating: null,
    workload: null,
    content: null,
    coursepairing: null,
    pairingrec: null,
    parentID: props.reviewData.reviewID,
  });

  const getUserID = async () => {
    try {
      var userIDData = await fetchWrapper.get("/users/getuserid");

      const userID = userIDData.data.userID;

      setValues((values) => ({
        ...values,
        ["userID"]: parseInt(userID),
      }));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    console.log("Getting course stats");
    getUserID();
  }, []);

  const handleSubmit = async (event) => {
    await fetchWrapper
      .post("/reviews/newreview", values)
      .then((data) => console.log("Success", data))
      .catch((error) => console.error("There was an error!", error));
    window.location.reload();
  };

  return (
    <>
      <Form>
        <FormLabel>Leave a comment</FormLabel>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            name="content"
            required
            onChange={onFormChange}
          />
        </Form.Group>
      </Form>
      <Button
        variant="primary"
        onClick={handleSubmit}
        className={styles.rightAlignButton}
      >
        Comment
      </Button>
    </>
  );
}
