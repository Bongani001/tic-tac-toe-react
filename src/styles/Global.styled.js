import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        ${(props) => props.theme.media.mobile} {
            font-size: 10px;
        }
    }

    body {
        background-color: ${(props) => props.theme.colors.primary};
    }
`;
