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

export default function MenuCustom1() {
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
				borderBottom: "1px solid white",
				backgroundColor: theme.palette.primary.main,
			}}
		>
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
						<Image src={process.env.NEXT_PUBLIC_STORAGE + opcions?.logo} height={50} width={100} alt="G" style={{ objectFit: "contain" }} />
					) : (
						<Typography variant="h3" color={isDark(opcions?.primary) ? "white" : "black"}>
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
						<NavBarItem to={item.to} key={item.title} title={item.title} />
					))}
				</Box>
			</Hidden>

			<Hidden mdUp>
				<Box onClick={() => router.push("/")}>{/* <Logo width={150} fill="white" /> */}</Box>
				<IconButton style={{ zIndex: 10 }} color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu}>
					<Menu color="secondary" />
				</IconButton>
				<Drawer open={menu} onClose={closeMenu}>
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
			</Box>
		</Toolbar>
	);
}
