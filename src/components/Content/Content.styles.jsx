import styled, { css } from "styled-components";

export const Content = styled.section`
	grid-column-start: 4;
	grid-column-end: 13;
	padding: 2.4rem;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	${({ displayType }) =>
		displayType &&
		css`
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
			gap: 1rem;
		`}
`;
