import React from "react";
import { Modal } from "react-bootstrap";

const CommonModal = ({ show, children, size, onClose, data }) => {


  return (
    <Modal
    className="modal-lg"
      show={show}
      onHide={onClose}
      
      centered
      keyboard={false}
      backdrop="static"
    >
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default CommonModal;
