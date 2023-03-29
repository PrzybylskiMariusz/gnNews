import { useState } from "react";
import { BiX } from "react-icons/bi";
import { StyledModal } from "../../../Modal/";
import { StyledWrapper } from "../../../Wrapper";
import { Popup } from "./Popup.styles";

export const StyledPopup = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(!isModalOpen);
	};
	return (
		<>
			<Popup onClick={handleOpenModal} />
			{isModalOpen && (
				<StyledModal>
					<StyledWrapper column>
						<BiX onClick={handleOpenModal} />
						Cześć :) Przede wszystkim dziękuję za możliwość wykonania tego
						zadania. Było naprawdę ciekawe. <br />
						<br />
						To co sprawiło mi największą trudność to komunikacja z API
						newsapi.org. Niestety nie wiedziałem jak dobrać się do pełnej
						zawartości artylułu, więc wyświetlam tylko to co jest w api. <br />
						Nie da się ukryć, że typscript oraz testowanie aplikacji nie
						są czymś w czym czuje się na tyle dobrze, żeby to robić. Jednak
						wynika to z tego, że jestem dopiero w połowie bootcampu infoshare
						"Frontend z React". Te dwa tematy na ten moment były tylko
						poruszone, ale jeszcze nie są przećwiczone i utrwalone. <br />
						<br />
						Frajdę sprawiło mi odkrywanie to czego jeszcze nie potrafię.
						Pozytywny wniosek z tego doświadczenia jest taki, że znam swoje
						braki i jestem mocno zmotywowany do ich uzupełnienia :)
						<br />
						<br />
						Pozdrawiam i czekam na feedback ;)
					</StyledWrapper>
				</StyledModal>
			)}
		</>
	);
};
