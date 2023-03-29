import { useDate } from "../../hooks/useDate";
import { StyledWrapper } from "../Wrapper";
import { Footer } from "./Footer.styles";

export const StyledFooter = ({ total }) => {
	const { wish, time } = useDate();
	return (
		<Footer>
			<StyledWrapper>
				<div>
					{wish}
					<br />
					{time}
				</div>
				<div>
					Total number of news:
					<br />
					{total}
				</div>
			</StyledWrapper>
		</Footer>
	);
};
