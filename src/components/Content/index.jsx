import { StyledHeading } from "./components/Heading";
import { Content, Wrapper } from "./Content.styles";

import { useSelector } from "react-redux";

export const StyledContent = ({ children }) => {
	const view = useSelector((state) => state.display.gridView);
	return (
		<Content>
			<StyledHeading>
				All
				<br /> News
				<br /> around
				<br /> the world
			</StyledHeading>
			<Wrapper displayType={view}>{children}</Wrapper>
		</Content>
	);
};
