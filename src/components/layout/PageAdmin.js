import React, { useEffect, useState } from "react";
import Fade from "@mui/material/Fade";
import Box from "@mui/system/Box";
import Head from "next/head";
import theme from "@/styles/theme";
import Title from "./Title";

const PageAdmin = ({ children, title = "", button, Icon, noMargin, ...rest }) => {
	const [appear, setApperar] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setApperar(true);
		}, 300);
	}, []);

	return (
		<div
			{...rest}
			style={{
				position: "relative",
			}}
		>
			<Head>
				<title>{title} - Portal Attack Admin</title>
			</Head>
			<Title button={button} Icon={Icon}>
				{title}
			</Title>
			<Fade in={appear} timeout={400}>
				<div
					style={{
						overflow: "hidden",
						backgroundColor: theme.palette.background.default,
					}}
				>
					<Box m={noMargin ? 0 : 3} mt={noMargin ? 9 : 13} zIndex={0}>
						{children}
					</Box>
				</div>
			</Fade>
		</div>
	);
};

export default PageAdmin;
