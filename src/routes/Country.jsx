import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_CODES, API_COUNTRY_NEWS, API_KEY } from "../api/api";
import { StyledArticle } from "../components/Article";
import { StyledMainTemplate } from "../templates";

export const Country = () => {
	const { name } = useParams();
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
		<StyledMainTemplate total={countryNews.totalResults}>
			{countryNews["articles"] &&
				countryNews["articles"].map((article) => (
					<StyledArticle
						key={crypto.randomUUID()}
						title={article.title}
						source={article.source.name}
						published={article.publishedAt}
						imageUrl={article.urlToImage}
						description={article.description}
						content={article.content}
						author={article.author}
						url={article.url}
					/>
				))}
		</StyledMainTemplate>
	);
};
