import { LinkAvatar } from "./LinkAvatar.styles";

export const StyledLinkAvatar = ({ imgSrc }) => {
	return (
		<LinkAvatar>
			<img src={imgSrc} />
		</LinkAvatar>
	);
};
