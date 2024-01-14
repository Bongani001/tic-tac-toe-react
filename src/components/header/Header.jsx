import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Login</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Header;
