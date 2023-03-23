import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_CODES, API_COUNTRY_NEWS, API_KEY } from "../api/api";
import { StyledMainTemplate } from "../templates";

export const Country = () => {
	const { name } = useParams();
	const [code, setCode] = useState("");
	const [countryNews, setCountryNews] = useState([]);

	const getCountryNews = async () => {
		let countryCode;
		try {
			const { data } = await API_CODES.get(`${name}?fields=alpha2Code`);
			const code = data[0].alpha2Code.toLowerCase();
			countryCode = code;
			const getCodes = async () => {
				const { data } = await API_COUNTRY_NEWS.get(
					`top-headlines?country=${countryCode}&apiKey=${API_KEY}`
				);
				setCountryNews(data);
			};
			getCodes();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCountryNews();
	}, [name]);

	return (
		<StyledMainTemplate>
			{countryNews["articles"] &&
				countryNews["articles"].map((article) => (
					<div key={crypto.randomUUID()}>{article?.title}</div>
				))}
		</StyledMainTemplate>
	);
};
