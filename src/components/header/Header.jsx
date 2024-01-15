import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
  HeaderWrapper,
  LightModeIcon,
  DarkModeIcon,
} from "../../styles/Header.styled";
import Logo from "../../assets/svgs/tic-tac-toe.svg?react";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <Logo className="logo" />
      <span onClick={toggleTheme}>
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </span>
    </HeaderWrapper>
  );
};

export default Header;
