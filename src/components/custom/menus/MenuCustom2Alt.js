import NavBarItem from "@/layouts/public/NavBarItem";
import { Close, Email, Instagram, Phone, Twitter } from "@mui/icons-material";
import { AppBar, Box, Container, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import { isDark } from "@/core/createTheme";
import { useOpcions } from "@/context/OpcionsContext";
import NavBarItemLight from "@/layouts/public/NavBarItemLight";
import { useState } from "react";
import { PreMenu } from "./PreMenu";

export default function MenuCustom2Alt({ scrollY = 0, premenu }) {
	const theme = useTheme();
	const router = useRouter();
	const opcions = useOpcions();

	const items = [
		...opcions?.pagines
			?.filter((i) => i.menu === 1)
			?.map((item) => {
				return { title: item.titol, to: "/" + item.slug };
			}),
	];

	return (
		<Toolbar
			style={{
				transition: "0.2s",
				justifyContent: "center",
				backgroundColor: theme.palette.background.main,
				flexDirection: "column",
				padding: 0,
			}}
		>
			{premenu === "1" && <PreMenu scrollY={scrollY} />}

			<Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
				<Box
					style={{
						display: "flex",
						justifyContent: "center",
						cursor: "pointer",
						transition: "0.2s",
						transform: scrollY > 200 ? "scale(0.6)" : "scale(1)",
						marginBottom: scrollY > 200 ? -20 : 0,
						marginTop: scrollY > 200 ? -10 : 10,
					}}
					onClick={() => router.push("/")}
				>
					{opcions?.logo ? (
						<Box height={120} width={200}>
							<Image src={process.env.NEXT_PUBLIC_STORAGE + opcions?.logo} fill alt="G" style={{ objectFit: "contain" }} />
						</Box>
					) : (
						<Typography variant="h3" color={isDark(opcions?.background) ? "white" : "black"} my={3}>
							{opcions?.titol}
						</Typography>
					)}
				</Box>
				<Box
					style={{
						display: "flex",
						justifyContent: "center",
					}}
					mb={2}
				>
					{items?.map((item) => (
						<NavBarItemLight to={item.to} key={item.title} title={item.title} />
					))}
				</Box>
			</Box>
		</Toolbar>
	);
}
