import React from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../button/Button";

const RoundOverModal = () => {
  return (
    <>
      <ModalHeader>
        <Title>Test</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle>Bongani won the round</Subtitle>
        <Subtitle>Bongani won the round</Subtitle>
        <Subtitle>Bongani won the round</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button color="#f3c811">Continue</Button>
        <Button color="#8437f9">Restart</Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
