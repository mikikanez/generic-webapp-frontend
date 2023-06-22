import React, { useEffect, useState } from "react";
import { Fade } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import theme from "@/styles/theme";
import { useOpcions } from "@/context/OpcionsContext";
import { menus } from "../custom/menus";
import { titols } from "../custom/titols";

const Page = ({ children, title = "", img = "exemple.jpg", ...rest }) => {
	const [appear, setApperar] = useState(false);
	const [marginTop, setMarginTop] = useState(100);
	const [scrollY, setScrollY] = useState();
	const router = useRouter();
	const opcions = useOpcions();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		setTimeout(() => {
			setApperar(true);
		}, 300);
	}, []);

	useEffect(() => {
		setMarginTop(menus.filter((menu) => menu.id === Number(opcions?.menu))[0]?.marginTop);
	}, [opcions?.menu]);

	const returnTitol = () => {
		const Titol = titols.filter((titol) => titol.id === Number(opcions?.header))[0].component;
		return <Titol title={title} hidden={router.asPath === "/"} scrollY={scrollY} img={img} />;
	};

	return (
		<div {...rest}>
			<Head>
				<title>{title}</title>
				<link rel="canonical" href={process.env.NEXT_URL + router.asPath} />
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
					{returnTitol()}
					{children}
				</div>
			</Fade>
		</div>
	);
};

export default Page;
