/** @format */

import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Discord | Friends",
	description:
		"Discord is the easiest way to communicate over voice, video, and text.  Chat, hang out, and stay close with your friends and communities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	);
}
