import styled from "styled-components";

export const Modal = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.blackOp};
	position: fixed;
	top: 0;
	left: 0;
`;
