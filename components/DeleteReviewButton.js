import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import styles from "../app/page.module.css";
import { useEffect } from "react";
import fetchWrapper from "@/pages/api/fetchWrapper";

export default function EditReview(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const reviewID = props.reviewData.reviewID;
      const values = { reviewID: reviewID };

      await fetchWrapper
        .post("/reviews/deletereview", values)
        .then((data) => console.log("Success", data))
        .catch((error) => console.error("There was an error!", error));
      window.location.reload();
    } catch (err) {}
  };

  return (
    <>
      <Button
        variant="danger"
        onClick={handleShow}
        className={styles.rightAlignButton}
      >
        Delete Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <button>Confirm Delete</button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
