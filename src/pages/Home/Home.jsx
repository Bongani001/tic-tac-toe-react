import React from "react";
import { Container } from "./Home.styled";
import { Subtitle, Title } from "../../styles/General.styled";

const Home = () => {
  return (
    <Container>
      <Title>Tic-Tac-Toe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
    </Container>
  );
};

export default Home;
