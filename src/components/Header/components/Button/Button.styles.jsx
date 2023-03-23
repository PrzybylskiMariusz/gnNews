import styled from "styled-components";

export const Button = styled.button`
	display: flex;
	font-size: 2.4rem;
	align-items: center;
	justify-content: space-between;
	width: 8rem;
	border-radius: 0.4rem;
	border: 1px solid ${({ theme }) => theme.colors.grayishBlue};
	background-color: ${({ theme }) => theme.colors.cream};
	padding: 0.8rem;
	cursor: pointer;
`;
