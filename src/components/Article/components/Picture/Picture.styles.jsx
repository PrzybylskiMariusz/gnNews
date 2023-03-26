import styled from "styled-components";

export const Picture = styled.div`
	height: 15rem;
	border-radius: 0.4rem;
	background-image: url(${({ imageUrl }) => imageUrl});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;
