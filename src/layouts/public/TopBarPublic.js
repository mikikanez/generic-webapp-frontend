import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/styles";
import NavBarItem from "./NavBarItem";
import { useRouter } from "next/router";
import Image from "next/image";
import theme from "@/styles/theme";
import { useOpcions } from "@/context/OpcionsContext";

const TopBarPublic = ({ className, onMobileNavOpen, ...rest }) => {
	const [scrollY, setScrollY] = useState();
	const router = useRouter();
	const matches = useMediaQuery("(min-width:960px)");
	const opcions = useOpcions();

	const items = [
		{
			title: "Inici",
			to: "/",
		},
	];

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	return (
		<BoxMain>
			<AppBar
				elevation={0}
				style={{
					backgroundColor: theme.palette.background.main,
					boxShadow: "none",
					zIndex: 10000,
				}}
			>
				<Toolbar
					style={{
						transition: "0.2s",
						borderBottom: "1px solid white",
						justifyContent: "center",
					}}
				>
					<Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
						<Box
							style={{
								display: "flex",
								justifyContent: "center",
								cursor: "pointer",
								transition: "0.2s",
								transform: scrollY > 200 ? "scale(0.6)" : "scale(1)",
								marginBottom: scrollY > 200 ? -20 : 0,
								marginTop: scrollY > 200 ? -10 : 0,
							}}
							onClick={() => router.push("/")}
						>
							{/* <Image src={"/logo.svg"} width={matches ? 360 : 250} height={matches ? 100 : 70} alt="Portal Attack" /> */}
							<Typography variant="h1" mb={2}>
								{opcions?.titol}
							</Typography>
						</Box>
						<Box
							style={{
								display: "flex",
								justifyContent: "center",
							}}
							mb={2}
						>
							{items?.map((item) => (
								<NavBarItem to={item.to} key={item.title} title={item.title} />
							))}
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</BoxMain>
	);
};

const BoxMain = styled(Box)(({ theme }) => ({
	width: "100%",
	zIndex: 100,
	transition: "0.2s",
	position: "fixed",
}));

export default TopBarPublic;
