import { useEffect, useState } from "react";
import { API_NEWS } from "../api/api";
import { StyledMainTemplate } from "../templates";

export const Home = () => {
	const [news, setNews] = useState([]);

	const getData = async () => {
		const { data } = await API_NEWS.get();
		setNews(data.articles);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<StyledMainTemplate>
			{news &&
				news.map((article) => (
					<div key={crypto.randomUUID()}>{article?.title}</div>
				))}
		</StyledMainTemplate>
	);
};
