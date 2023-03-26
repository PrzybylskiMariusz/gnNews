import { StyledLogo } from "./components/Logo";
import { Header } from "./Header.styles";
import { BiGridAlt, BiListUl } from "react-icons/bi";
import { StyledButton } from "./components/Button";

import { useSelector, useDispatch } from "react-redux";
import { toggleView } from "../../features/display/displaySlice";

export const StyledHeader = () => {
	const view = useSelector((state) => state.display.listView);
	const dispatch = useDispatch();
	return (
		<Header>
			<StyledLogo>
				gn<span>News</span>
			</StyledLogo>
			<StyledButton onClick={() => dispatch(toggleView())}>
				<BiListUl />
				<BiGridAlt />
			</StyledButton>
		</Header>
	);
};
