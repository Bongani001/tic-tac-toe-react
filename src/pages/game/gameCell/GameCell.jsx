import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../../contexts/GameContext";
import { checkForWinner } from "../../../utils/gameUtils";
import { ModalContext } from "../../../contexts/ModalContext";
import IconX from "../../../assets/svgs/icon-x.svg?react";
import IconO from "../../../assets/svgs/icon-o.svg?react";
import IconOutlineX from "../../../assets/svgs/icon-x-outline.svg?react";
import IconOutlineO from "../../../assets/svgs/icon-o-outline.svg?react";
import RoundOverModal from "../../../components/Modal/roundOverModal/RoundOverModal";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const cellClickHandler = () => {
    updateBoard(index);
    if (checkForWinner(game.board)) {
      handleModal(<RoundOverModal />);
    }
  };

  if (cellItem === "X") {
    return (
      <CellStyle>
        <IconX className="markedItem" />
      </CellStyle>
    );
  } else if (cellItem === "O") {
    return (
      <CellStyle>
        <IconO className="markedItem" />
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={cellClickHandler}>
      {game.turn === "X" ? (
        <IconOutlineX className="outlineIcon" />
      ) : (
        <IconOutlineO className="outlineIcon" />
      )}
    </CellStyle>
  );
};

export default GameCell;
