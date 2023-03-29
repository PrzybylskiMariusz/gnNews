import styled, { css } from "styled-components";

export const SideBar = styled.nav`
	grid-column-start: 1;
	grid-column-end: 4;
	padding: 2.4rem 0 2.4rem 2.4rem;
	border-right: 1px solid ${({ theme }) => theme.grayishBlue};

	@media screen and (max-width: 1024px) {
		padding: 1.6rem 0;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}

	${({ mobile }) =>
		mobile &&
		css`
			@media screen and (min-width: 769px) {
				display: none;
			}
			@media screen and (max-width: 768px) {
				display: ${({ visible }) => (visible ? "flex" : "none")};
				flex-direction: column;
				position: absolute;
				grid-row-start: 3;
				height: auto;
				grid-column-end: 6;
				background-color: ${({ theme }) => theme.colors.cream};
			}
		`}
`;
