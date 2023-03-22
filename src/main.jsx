import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import App from "./App";
import { GlobalStyles } from "./theme/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<App />
			</>
		</ThemeProvider>
	</React.StrictMode>
);
