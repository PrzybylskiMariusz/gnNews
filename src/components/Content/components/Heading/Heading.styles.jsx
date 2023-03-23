import styled from "styled-components";

export const Heading = styled.h1`
	font-family: ${({ theme }) => theme.fonts.secondary}, cursive;
	font-weight: ${({ theme }) => theme.fonts.weights.regular};
	font-size: 4rem;
	margin-bottom: 3.2rem;
`;
