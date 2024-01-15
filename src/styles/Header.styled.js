import styled from "styled-components";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 2rem;

  .logo {
    width: 3rem;
    fill: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }
`;

export const LightModeIcon = styled(MdOutlineLightMode)`
  fill: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;

export const DarkModeIcon = styled(MdOutlineDarkMode)`
  fill: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;
