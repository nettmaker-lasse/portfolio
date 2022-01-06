// /lib/sanity.js
import sanityClient from "@sanity/client";

// See the image above on how to get your projectId and add a new API token
// I added one called "landing page"
const client = sanityClient({
	projectId: "vn88o3gc",
	dataset: "production",
	apiVersion: "2022-01-01",
	token:
		"skcRiLFhSfXjp3Dj6u1FufIh8uB3E5J76X4u5YR3hCY0BWPQUo6xQLcpQTHlWg6wRL4qbG9MCUGItvwjrRUO0Y2AIKm7Y13MPZeLbmCR0QpupUUABAx2uELMuGi1RFCeX8tx6vIJT1O31smDqBAX0PQ5cTGNzOs9aipopyXBGti8wLCX3Xzm", // or leave blank to be anonymous user
	useCdn: false, // `false` if you want to ensure fresh data
	ignoreBrowserTokenWarning: true,
});

export default client;
