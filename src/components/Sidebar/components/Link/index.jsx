import { CustomLink } from "./Link.styles";

export const StyledLink = ({ children, to }) => {
	return <CustomLink to={to}>{children}</CustomLink>;
};
