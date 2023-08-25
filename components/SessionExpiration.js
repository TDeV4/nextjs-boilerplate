import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function SessionExpiryNotification({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <div className="modal-container">
        <Modal.Header closeButton>
          <Modal.Title>Session Expiry Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your session is about to expire in 10 seconds and you will automatically be redirected to login. Any in progress edits/creations will not be saved.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
