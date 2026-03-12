import { NextResponse } from "next/server";

const PRIMARY_DOMAIN = "lassebuus.no";

export function proxy(request) {
	const host = (request.headers.get("host") || "").toLowerCase().split(":")[0];

	if (!host) {
		return NextResponse.next();
	}

	// Enforce canonical host for preview domains only.
	const shouldRedirectToPrimary = host.endsWith(".vercel.app");

	if (shouldRedirectToPrimary) {
		const url = request.nextUrl.clone();
		url.protocol = "https";
		url.host = PRIMARY_DOMAIN;
		return NextResponse.redirect(url, 308);
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};
