import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { theme } from "./theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Country } from "./routes/Country";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <ThemeProvider theme={theme}> */}
		<BrowserRouter>
			{/* <GlobalStyles /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/country/:name" element={<Country />} />
			</Routes>
		</BrowserRouter>
		{/* </ThemeProvider> */}
	</React.StrictMode>
);
