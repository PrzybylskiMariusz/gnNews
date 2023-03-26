import { useSelector } from "react-redux";
import { Article } from "./Article.styles";
import { StyledDescription } from "./components/Description";
import { Info } from "./components/Info/Info.styles";
import { StyledPicture } from "./components/Picture";
import { StyledTitle } from "./components/Title";
import { StyledWrapper } from "./components/Wrapper";

export const StyledArticle = ({
	title,
	source,
	published,
	imageUrl,
	description,
}) => {
	const view = useSelector((state) => state.display.gridView);
	const publishedAt = new Date(published);
	return (
		<Article>
			{view ? imageUrl && <StyledPicture imageUrl={imageUrl} /> : null}
			<StyledTitle>{title}</StyledTitle>
			{view
				? description && <StyledDescription>{description}</StyledDescription>
				: null}
			<StyledWrapper>
				<Info>{publishedAt.toLocaleString()}</Info>
				<Info>{source}</Info>
			</StyledWrapper>
		</Article>
	);
};
