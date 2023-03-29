import { useState } from "react";
import { BiX } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Article } from "./Article.styles";
import { StyledDescription } from "./components/Description";
import { Info } from "./components/Info/Info.styles";
import { Modal } from "./components/Modal/Modal.styles";
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
					<Info>{publishedAt.toLocaleString()}</Info>
					<Info>{source}</Info>
				</StyledWrapper>
			</Article>
			{isModalOpen ? (
				<Modal>
					<StyledWrapper column>
						<BiX onClick={handleArticleClick} />
						<StyledTitle>{title}</StyledTitle>
						<Info>{author}</Info>
						<div>{content}</div>
						<Info>
							<a href={url} target="_blank" rel="noopener noreferrer">
								{url}
							</a>
						</Info>
					</StyledWrapper>
				</Modal>
			) : null}
		</>
	);
};
