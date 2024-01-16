import React from "react";
import { Container } from "../../styles/General.styled";
import { GameBoard } from "./Game.styled";
import GameCell from "./gameCell/GameCell"

const Game = () => {
  const board = [1,2,3,4,5,6,7,8,9]
  return (
    <Container>
      <GameBoard>
        {board.map((item, index) => <GameCell />)}
      </GameBoard>
    </Container>
  );
};

export default Game;
