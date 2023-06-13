import React, { useEffect, useState } from "react";
import { Fade } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import theme from "@/styles/theme";

const Page = ({ children, title = "", ...rest }) => {
	const [appear, setApperar] = useState(false);
	const router = useRouter();

	useEffect(() => {
		window.scrollTo(0, 0);
		setTimeout(() => {
			setApperar(true);
		}, 300);
	}, []);

	return (
		<div
			{...rest}
			style={{
				backgroundColor: theme.palette.background.main,
			}}
		>
			<Head>
				<title>{title}</title>
				<link rel="canonical" href={router.pathname} />
			</Head>
			<Fade in={appear} timeout={400}>
				<div
					style={{
						backgroundColor: "white",
						backgroundImage: `url(fons.jpg)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						marginTop: 100,
					}}
				>
					{children}
				</div>
			</Fade>
		</div>
	);
};

export default Page;
