import { useEffect, useState } from "react";
import { API_COUNTRIES } from "../../api/api";
import { StyledLink } from "./components/Link";
import { StyledLinkAvatar } from "./components/LinkAvatar";
import { StyledMenuIcon } from "./components/MenuIcon";
import { SideBar } from "./Sidebar.styles";

export const StyledSidebar = () => {
	const [countries, setCountries] = useState([]);
	const [visible, setVisible] = useState(false);

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

	const toggleMobileVisibility = () => {
		setVisible(!visible);
	};

	useEffect(() => {
		getLinks();
	}, []);
	return (
		<>
			<StyledMenuIcon onClick={toggleMobileVisibility} />
			<SideBar>
				{countries &&
					countries.map((country) => (
						<StyledLink
							to={`/country/${country.name}`}
							key={crypto.randomUUID()}>
							<StyledLinkAvatar imgSrc={country.flag} />
							{country.name}
						</StyledLink>
					))}
			</SideBar>
			<SideBar mobile={true} visible={visible}>
				{countries &&
					countries.map((country) => (
						<StyledLink
							to={`/country/${country.name}`}
							key={crypto.randomUUID()}>
							<StyledLinkAvatar imgSrc={country.flag} />
							{country.name}
						</StyledLink>
					))}
			</SideBar>
		</>
	);
};
