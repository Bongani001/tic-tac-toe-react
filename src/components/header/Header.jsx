import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import Logo from "../../assets/svgs/tic-tac-toe.svg?react";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../contexts/SfxContext";
function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { hoverSfx, clickSfx } = useContext(SfxContext);

  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Logo
        className="logo"
        onClick={() => {
          clickSfx();
          navigate("/");
        }}
        onMouseEnter={() => hoverSfx()}
      />

      <span
        onClick={() => {
          clickSfx();
          toggleTheme();
        }}
        onMouseEnter={() => hoverSfx()}
      >
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
}

export default Header;
