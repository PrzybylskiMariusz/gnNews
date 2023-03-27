import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle(
	({ theme }) => css`
		html {
			box-sizing: border-box;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			font-size: 62.5%;
		}
		*,
		*:before,
		*:after {
			box-sizing: inherit;
			margin: 0;
			padding: 0;
			font-family: ${theme.fonts.primary}, sans-serif;
		}
		body {
			background-color: ${theme.colors.cream};
			color: ${theme.colors.darkBlue};
			font-size: 1.6rem;
			font-family: inherit;
			position: relative;
		}
	`
);
