import { StyledHeading } from "./components/Heading";
import { Content, Wrapper } from "./Content.styles";

export const StyledContent = ({ children }) => {
	return (
		<Content>
			<StyledHeading>
				All
				<br /> News
				<br /> around
				<br /> the world
			</StyledHeading>
			<Wrapper displayType={false}>{children}</Wrapper>
		</Content>
	);
};
