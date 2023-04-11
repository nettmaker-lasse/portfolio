import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import SimpleReactLightbox from "simple-react-lightbox";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="light">
			<SimpleReactLightbox>
				<Component {...pageProps} />
			</SimpleReactLightbox>
			<Analytics />
		</ThemeProvider>
	);
}

export default MyApp;
