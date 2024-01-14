import React from "react";
import { Container } from "./Home.styled";
import { Title } from "../../styles/General.styled";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <Container>
      <Header />
        <Title>Tic-Tac-Toe</Title>
    </Container>
  );
};

export default Home;
