import React, { useEffect, useState } from "react";
import { Fade } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import theme from "@/styles/theme";
import { useOpcions } from "@/context/OpcionsContext";
import { menus } from "../custom/menus";

const Page = ({ children, title = "", ...rest }) => {
	const [appear, setApperar] = useState(false);
	const [marginTop, setMarginTop] = useState(100);
	const router = useRouter();
	const opcions = useOpcions();

	useEffect(() => {
		window.scrollTo(0, 0);
		setTimeout(() => {
			setApperar(true);
		}, 300);
	}, []);

	useEffect(() => {
		console.log(menus.filter((menu) => menu.id === Number(opcions?.menu))[0]);
		setMarginTop(menus.filter((menu) => menu.id === Number(opcions?.menu))[0]?.marginTop);
	}, [opcions?.menu]);

	return (
		<div {...rest}>
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
						marginTop: marginTop,
						zIndex: 0,
					}}
				>
					{children}
				</div>
			</Fade>
		</div>
	);
};

export default Page;
