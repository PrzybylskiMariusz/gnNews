import { StyledLogo } from "./components/Logo";
import { Header } from "./Header.styles";
import { BiGridAlt, BiListUl } from "react-icons/bi";
import { StyledButton } from "./components/Button";

import { useDispatch, useSelector } from "react-redux";
import { toggleView } from "../../features/display/displaySlice";
import { StyledPopup } from "./components/Popup";

export const StyledHeader = () => {
	const view = useSelector((state) => state.display.gridView);
	const dispatch = useDispatch();
	return (
		<Header>
			<StyledLogo>
				gn<span>News</span>
			</StyledLogo>
			<StyledPopup />
			<StyledButton view={view} onClick={() => dispatch(toggleView())}>
				<BiListUl />
				<BiGridAlt />
			</StyledButton>
		</Header>
	);
};
