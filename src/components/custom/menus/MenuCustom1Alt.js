import NavBarItem from "@/layouts/public/NavBarItem";
import NavBarItemMobile from "@/layouts/public/NavBarItemMobile";
import { Close, Instagram, Twitter } from "@mui/icons-material";
import { AppBar, Box, Drawer, Hidden, IconButton, Menu, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import { isDark } from "@/core/createTheme";
import { useState } from "react";
import { useOpcions } from "@/context/OpcionsContext";
import NavBarItemLight from "@/layouts/public/NavBarItemLight";
import { PreMenu } from "./PreMenu";

export default function MenuCustom1Alt({ premenu, scrollY = 0 }) {
	const router = useRouter();
	const [menu, setMenu] = useState(null);
	const opcions = useOpcions();
	const theme = useTheme();

	const items = [
		...opcions?.pagines
			?.filter((i) => i.menu === 1)
			?.map((item) => {
				return { title: item.titol, to: "/" + item.slug };
			}),
	];

	const openMenu = (event) => {
		setMenu(event.currentTarget);
	};

	const closeMenu = () => {
		setMenu(null);
	};

	return (
		<Toolbar
			style={{
				transition: "0.2s",
				backgroundColor: theme.palette.background.main,
				flexDirection: "column",
				padding: 0,
			}}
		>
			{premenu === "1" && <PreMenu scrollY={scrollY} />}
			<Box display={"flex"} alignItems={"center"} width="100%" px={3}>
				<Hidden mdDown>
					<Box
						style={{
							flex: 1,
							display: "flex",
							justifyContent: "flex-start",
							cursor: "pointer",
							padding: 15,
						}}
						onClick={() => router.push("/")}
					>
						{opcions?.logo ? (
							<Image src={process.env.NEXT_PUBLIC_STORAGE + opcions?.logo} height={60} width={100} alt="G" style={{ objectFit: "contain" }} />
						) : (
							<Typography variant="h3" color={isDark(opcions?.background) ? "white" : "black"}>
								{opcions?.titol}
							</Typography>
						)}
					</Box>
				</Hidden>
				<Hidden mdDown>
					<Box
						style={{
							flex: 1,
							display: "flex",
							justifyContent: "center",
						}}
					>
						{items?.map((item) => (
							<NavBarItemLight to={item.to} key={item.title} title={item.title} />
						))}
					</Box>
				</Hidden>

				<Hidden mdUp>
					<Box onClick={() => router.push("/")}>{/* <Logo width={150} fill="white" /> */}</Box>
					<IconButton style={{ zIndex: 10 }} color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu}>
						<Menu color="secondary" />
					</IconButton>
					<Drawer style={{ zIndex: 10000 }} open={menu} onClose={closeMenu} anchor={"top"}>
						<IconButton onClick={closeMenu}>
							<Close />
						</IconButton>
						{items?.map((item) => (
							<NavBarItemMobile to={item.to} key={item.title} title={item.title} closeMenu={closeMenu} />
						))}
					</Drawer>
				</Hidden>
				<Box
					style={{
						flex: 1,
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					{premenu !== "1" && (
						<Stack direction={"row"} spacing={2} justifyContent={"center"} mt={1}>
							{opcions?.instagram && (
								<a href={opcions?.instagram} target={"_blank"} rel="noreferrer">
									<Instagram color={isDark(opcions?.background) ? "info" : "primary"} />
								</a>
							)}
							{opcions?.twitter && (
								<a href={opcions?.twitter} target={"_blank"} rel="noreferrer">
									<Twitter color={isDark(opcions?.background) ? "info" : "primary"} />
								</a>
							)}
						</Stack>
					)}
				</Box>
			</Box>
		</Toolbar>
	);
}
