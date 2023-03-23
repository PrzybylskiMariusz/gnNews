import { Logo, StyledLink } from "./Logo.styles";

export const StyledLogo = ({ children }) => {
	return (
		<StyledLink to="/">
			<Logo>{children}</Logo>
		</StyledLink>
	);
};
