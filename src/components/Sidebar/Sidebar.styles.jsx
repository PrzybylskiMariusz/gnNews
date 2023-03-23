import styled, { css } from "styled-components";

export const SideBar = styled.nav`
	grid-column-start: 1;
	grid-column-end: 4;
	padding: 2.4rem 0 2.4rem 2.4rem;
	border-right: 1px solid ${({ theme }) => theme.grayishBlue};

	a {
		text-decoration: none;
		display: block;
		margin-bottom: 1.6rem;
		font-weight: ${({ theme }) => theme.fonts.weights.light};
		color: ${({ theme }) => theme.colors.grayishBlue};
		display: grid;
		grid-template-columns: 5rem 1fr;
		align-items: center;
		gap: 1rem;

		:hover {
			color: ${({ theme }) => theme.colors.darkBlue};
			font-weight: ${({ theme }) => theme.fonts.weights.regular};
		}

		&.active {
			color: ${({ theme }) => theme.colors.darkBlue};
			font-weight: ${({ theme }) => theme.fonts.weights.regular};
		}

		div {
			width: 3.5rem;
			height: 3.5rem;
			border-radius: 50%;
			overflow: hidden;
			display: flex;
			align-items: center;
			justify-content: center;

			img {
				height: 100%;
			}
		}
	}
`;
