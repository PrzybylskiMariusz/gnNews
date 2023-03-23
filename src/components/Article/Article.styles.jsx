import styled from "styled-components";

export const Article = styled.article`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	padding: 1.6rem;
	margin-bottom: 1.6rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grayishBlue};
	border-radius: 0.4rem;
	transition: background-color 0.3s ease-in-out;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.whiteOp};
	}
`;
