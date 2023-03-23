import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Link = styled(NavLink)(
	({ theme }) => css`
		text-decoration: none;
		display: block;
		margin-bottom: 1.6rem;
		font-weight: ${theme.fonts.weights.light};
		color: ${theme.colors.grayishBlue};
		display: grid;
		grid-template-columns: 5rem 1fr;
		align-items: center;
		gap: 1rem;

		:hover {
			color: ${theme.colors.darkBlue};
			font-weight: ${theme.fonts.weights.regular};
		}

		&.active {
			color: ${theme.colors.darkBlue};
			font-weight: ${theme.fonts.weights.regular};
		}
	`
);
