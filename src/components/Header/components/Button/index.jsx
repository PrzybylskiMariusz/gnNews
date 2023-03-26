import { Button } from "./Button.styles";

export const StyledButton = ({ onClick, children, view }) => {
	return (
		<Button onClick={onClick} view={view}>
			{children}
		</Button>
	);
};
