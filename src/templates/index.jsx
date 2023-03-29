import { ThemeProvider } from "styled-components";
import { StyledContent } from "../components/Content";
import { StyledFooter } from "../components/Footer";
import { StyledHeader } from "../components/Header";
import { StyledSidebar } from "../components/Sidebar";
import { GlobalStyles } from "../theme/GlobalStyles";
import { theme } from "../theme/theme";
import { MainTemplate } from "./MainTemplate";

export const StyledMainTemplate = ({ children, total }) => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<MainTemplate>
					<StyledHeader />
					<StyledSidebar />
					<StyledContent> {children}</StyledContent>
					<StyledFooter total={total} />
				</MainTemplate>
			</>
		</ThemeProvider>
	);
};
