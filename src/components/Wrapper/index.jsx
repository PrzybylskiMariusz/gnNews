import { Wrapper } from "./Wrapper.styles";

export const StyledWrapper = ({ children, column }) => {
	return <Wrapper column={column}>{children}</Wrapper>;
};
