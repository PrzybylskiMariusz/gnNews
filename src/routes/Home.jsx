import { useEffect, useState } from "react";
import { API_NEWS } from "../api/api";
import { StyledArticle } from "../components/Article";
import { StyledMainTemplate } from "../templates";

export const Home = () => {
	const [news, setNews] = useState([]);

	const getData = async () => {
		const { data } = await API_NEWS.get();
		setNews(data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<StyledMainTemplate>
			{news["articles"] &&
				news["articles"].map((article) => (
					<StyledArticle
						key={crypto.randomUUID()}
						title={article.title}
						source={article.source.name}
						published={article.publishedAt}
					/>
				))}
		</StyledMainTemplate>
	);
};
