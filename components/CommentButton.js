import { Button, Form, FormLabel } from "react-bootstrap";
import { useState } from "react";
import styles from "../app/page.module.css";

export default function EditProfile(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {};

  return (
    <>
      <Form>
        <FormLabel>Leave a comment</FormLabel>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} />
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
