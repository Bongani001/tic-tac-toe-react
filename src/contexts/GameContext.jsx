import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1: {
      choice: "X",
      name: "Bongani",
    },
    player2: {
      choice: "O",
      name: "Nyaku",
    },
    turn: "X",
  });

  const updateBoard = (index) => {
    let updatedBoard = game.board;
    updatedBoard[index] = game.turn;
    setGame({
      ...game,
      board: updatedBoard,
      turn: game.turn === "X" ? "O" : "X",
    });
  };

  return (
    <GameContext.Provider value={{ game, updateBoard }}>
      {children}
    </GameContext.Provider>
  );
};
