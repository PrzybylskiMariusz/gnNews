import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { API_COUNTRIES } from "../api/api";
import { StyledContent } from "../components/Content";
import { StyledFooter } from "../components/Footer";
import { StyledHeader } from "../components/Header";
import { StyledSidebar } from "../components/Sidebar";
import { GlobalStyles } from "../theme/GlobalStyles";
import { theme } from "../theme/theme";
import { MainTemplate } from "./MainTemplate";

export const StyledMainTemplate = ({ children }) => {
	const [countries, setCountries] = useState([]);

	const sortLinks = (list) => {
		list.sort((a, b) => {
			const nameA = a.name.toUpperCase();
			const nameB = b.name.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			return 0;
		});
	};

	const getLinks = async () => {
		const { data } = await API_COUNTRIES.get();
		const sortedData = data.sort((a, b) => {
			const nameA = a.name.toUpperCase();
			const nameB = b.name.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			return 0;
		});
		setCountries(sortedData);
	};

	useEffect(() => {
		getLinks();
	}, []);
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
						{countries &&
							countries.map((country) => (
								<NavLink to={`/country/${country.name}`}>
									<div>
										<img src={`${country.flag}`} />
									</div>
									{country.name}
								</NavLink>
							))}
					</StyledSidebar>
					<StyledContent> {children}</StyledContent>
					<StyledFooter>Footer</StyledFooter>
				</MainTemplate>
			</>
		</ThemeProvider>
	);
};
