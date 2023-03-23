import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	grid-column-start: 1;
	grid-column-end: 13;
	padding: 2.4rem 0;
	border-bottom: 1px solid ${({ theme }) => theme.grayishBlue};
`;
