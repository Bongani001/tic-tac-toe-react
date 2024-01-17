import React, { useContext } from "react";
import ReactDOM  from "react-dom";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalBackdrop, ModalContainer } from "./Modal.styled";

const ModalTemplate = () => {
  const { modal, modalContent, handleModal } = useContext(ModalContext);

  if (modal) {
    return ReactDOM.createPortal(
      <ModalBackdrop>
        <ModalContainer>{modalContent}</ModalContainer>
      </ModalBackdrop>,
      document.getElementById("modal-root")
    );
  }

  return null;
};

export default ModalTemplate;
