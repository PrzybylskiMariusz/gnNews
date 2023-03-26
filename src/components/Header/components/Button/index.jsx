import { Button } from "./Button.styles";

export const StyledButton = ({ onClick, children }) => {
	return <Button onClick={onClick}>{children}</Button>;
};
