import styled from "styled-components";

export const Button = styled.button`
	display: flex;
	font-size: 2.4rem;
	align-items: center;
	justify-content: space-between;
	width: 8rem;
	border-radius: 0.4rem;
	border: 1px solid ${({ theme }) => theme.colors.grayishBlue};
	background-color: transparent;
	padding: 0.8rem;
	cursor: pointer;
	position: relative;

	&::before {
		content: "";
		width: 50%;
		height: 3.8rem;
		background-color: ${({ theme }) => theme.colors.white};
		position: absolute;
		left: ${({ view }) => (view ? "none" : 0)};
		right: ${({ view }) => (view ? 0 : "none")};
		z-index: -1;
	}
`;
