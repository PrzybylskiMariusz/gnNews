import { Article } from "./Article.styles";
import { Info } from "./components/Info/Info.styles";
import { StyledTitle } from "./components/Title";
import { StyledWrapper } from "./components/Wrapper";

export const StyledArticle = ({ title, source, published }) => {
	const publishedAt = new Date(published);
	return (
		<Article>
			<StyledTitle>{title}</StyledTitle>
			<StyledWrapper>
				<Info>{publishedAt.toLocaleString()}</Info>
				<Info>{source}</Info>
			</StyledWrapper>
		</Article>
	);
};
