import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider defaultTheme="light" attribute="class">
			<SimpleReactLightbox>
				<Component {...pageProps} />
			</SimpleReactLightbox>
		</ThemeProvider>
	);
}

export default MyApp;
