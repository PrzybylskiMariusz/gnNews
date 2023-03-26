import styled from "styled-components";

export const Article = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1.6rem;
	padding: 1.6rem;
	margin-bottom: 1.6rem;
	border-radius: 0.4rem;
	box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.08);
	transition: background-color 0.3s ease-in-out;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.whiteOp};
	}
`;
