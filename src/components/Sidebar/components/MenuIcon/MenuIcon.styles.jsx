import { BiMenuAltLeft } from "react-icons/bi";
import styled from "styled-components";

export const MenuIcon = styled(BiMenuAltLeft)`
	font-size: 2.4rem;
	cursor: pointer;
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
	}
`;
