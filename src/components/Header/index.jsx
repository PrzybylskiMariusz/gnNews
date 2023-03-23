import { StyledLogo } from "./components/Logo";
import { Header } from "./Header.styles";
import { BiGridAlt, BiListUl } from "react-icons/bi";
import { StyledButton } from "./components/Button";

export const StyledHeader = () => {
	return (
		<Header>
			<StyledLogo>
				gn<span>News</span>
			</StyledLogo>
			<StyledButton>
				<BiListUl />
				<BiGridAlt />
			</StyledButton>
		</Header>
	);
};
