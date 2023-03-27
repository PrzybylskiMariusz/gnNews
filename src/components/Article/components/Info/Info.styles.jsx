import styled from "styled-components";

export const Info = styled.p`
	color: ${({ theme }) => theme.colors.grayishBlue};
	font-size: 1.2rem;

	a {
		display: block;
		word-break: break-all;
	}
`;
