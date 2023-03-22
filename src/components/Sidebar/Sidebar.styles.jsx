import styled from "styled-components";

export const SideBar = styled.nav`
	grid-column-start: 1;
	grid-column-end: 4;
	padding: 2.4rem;
	border-right: 1px solid ${({ theme }) => theme.grayishBlue};
`;
