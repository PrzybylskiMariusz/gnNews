import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	${({ column }) =>
		column &&
		css`
			flex-direction: column;
			align-items: flex-start;
			gap: 1.6rem;
			width: 50%;
			background-color: ${({ theme }) => theme.colors.cream};
			border-radius: 0.4rem;
			padding: 1.6rem;

			svg {
				align-self: flex-end;
				font-size: 2.4rem;
				cursor: pointer;
			}
		`}
`;
