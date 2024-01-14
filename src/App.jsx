import React from "react";
import Router from "./Router";
import { GlobalStyles } from "./styles/Global.styled";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Router />
    </div>
  );
};

export default App;
