import React, { useEffect, useState } from "react";
import { Fade } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import theme from "@/styles/theme";
import { useOpcions } from "@/context/OpcionsContext";
import { menus } from "../custom/menus";
import { titols } from "../custom/titols";
import { motion, AnimatePresence } from "framer-motion";

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

	const variants = {
		hidden: { opacity: 0, x: 0, y: 50 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -100 },
	};

	return (
		<div {...rest}>
			<Head>
				<title>{title}</title>
				<link rel="canonical" href={process.env.NEXT_URL + router.asPath} />
			</Head>
			<motion.div
				variants={variants} // Pass the variant object into Framer Motion
				initial="hidden" // Set the initial state to variants.hidden
				animate="enter" // Animated state to variants.enter
				exit="exit" // Exit state (used later) to variants.exit
				transition={{ type: "linear" }}
			>
				<AnimatePresence>
					<div
						style={{
							backgroundColor: "white",
							backgroundImage: `url(fons.jpg)`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							marginTop: marginTop + (opcions?.premenu === "1" ? 40 : 0),
							zIndex: 0,
						}}
					>
						{returnTitol()}
						{children}
					</div>
				</AnimatePresence>
			</motion.div>
		</div>
	);
};

export default Page;
