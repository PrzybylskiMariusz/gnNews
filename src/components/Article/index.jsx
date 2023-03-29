import { useState } from "react";
import { BiX } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Article } from "./Article.styles";
import { StyledDescription } from "./components/Description";
import { StyledInfo } from "./components/Info";
import { StyledModal } from "../../components/Modal";
import { StyledPicture } from "./components/Picture";
import { StyledTitle } from "./components/Title";
import { StyledWrapper } from "../Wrapper";

export const StyledArticle = ({
	title,
	source,
	published,
	imageUrl,
	description,
	content,
	author,
	url,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleArticleClick = () => {
		setIsModalOpen(!isModalOpen);
	};

	const view = useSelector((state) => state.display.gridView);
	const publishedAt = new Date(published);
	return (
		<>
			<Article onClick={() => handleArticleClick()}>
				{view ? imageUrl && <StyledPicture imageUrl={imageUrl} /> : null}
				<StyledTitle>{title}</StyledTitle>
				{view
					? description && <StyledDescription>{description}</StyledDescription>
					: null}
				<StyledWrapper>
					<StyledInfo>{publishedAt.toLocaleString()}</StyledInfo>
					<StyledInfo>{source}</StyledInfo>
				</StyledWrapper>
			</Article>
			{isModalOpen ? (
				<StyledModal>
					<StyledWrapper column>
						<BiX onClick={handleArticleClick} />
						<StyledTitle>{title}</StyledTitle>
						<StyledInfo>{author}</StyledInfo>
						<div>{content}</div>
						<StyledInfo>
							<a href={url} target="_blank" rel="noopener noreferrer">
								{url}
							</a>
						</StyledInfo>
					</StyledWrapper>
				</StyledModal>
			) : null}
		</>
	);
};
