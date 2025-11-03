import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="light">
				<Component {...pageProps} />
			<SpeedInsights />
		</ThemeProvider>
	);
}

export default MyApp;
