import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled.h2`
	font-size: 1.8rem;
	color: ${({ theme }) => theme.colors.darkBlue};
	font-weight: ${({ theme }) => theme.fonts.weights.regular};

	span {
		font-family: ${({ theme }) => theme.fonts.secondary};
		font-size: 3rem;
		font-weight: ${({ theme }) => theme.fonts.weights.regular};
		color: ${({ theme }) => theme.colors.grayishBlue};
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
`;
