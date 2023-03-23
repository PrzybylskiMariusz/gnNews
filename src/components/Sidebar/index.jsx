import { useEffect, useState } from "react";
import { API_COUNTRIES } from "../../api/api";
import { Link } from "./components/Link/Link.style";
import { StyledLinkAvatar } from "./components/LinkAvatar";
import { SideBar } from "./Sidebar.styles";

export const StyledSidebar = () => {
	const [countries, setCountries] = useState([]);

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
		<SideBar>
			{countries &&
				countries.map((country) => (
					<Link to={`/country/${country.name}`} key={crypto.randomUUID()}>
						<StyledLinkAvatar imgSrc={country.flag} />
						{country.name}
					</Link>
				))}
		</SideBar>
	);
};
