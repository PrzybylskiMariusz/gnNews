import { ThemeProvider } from "styled-components";
import { StyledContent } from "../components/Content";
import { StyledFooter } from "../components/Footer";
import { StyledHeader } from "../components/Header";
import { StyledSidebar } from "../components/Sidebar";
import { GlobalStyles } from "../theme/GlobalStyles";
import { theme } from "../theme/theme";
import { MainTemplate } from "./MainTemplate";

export const StyledMainTemplate = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<MainTemplate>
					<StyledHeader>
						<div>Logo</div>
						<div>Switcher</div>
					</StyledHeader>
					<StyledSidebar>
						<div>ListItem 1</div>
						<div>ListItem 2</div>
						<div>ListItem 3</div>
						<div>ListItem 4</div>
						<div>ListItem 5</div>
					</StyledSidebar>
					<StyledContent> {children}</StyledContent>
					<StyledFooter>Footer</StyledFooter>
				</MainTemplate>
			</>
		</ThemeProvider>
	);
};
