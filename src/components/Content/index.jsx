import { Content, Wrapper } from "./Content.styles";

export const StyledContent = ({ children }) => {
	return (
		<Content>
			<Wrapper displayType={false}>{children}</Wrapper>
		</Content>
	);
};
