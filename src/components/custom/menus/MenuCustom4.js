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

export default function MenuCustom4() {
	const router = useRouter();
	const [menu, setMenu] = useState(null);
	const opcions = useOpcions();

	const items = [
		...opcions?.pagines?.map((item) => {
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
						<Typography variant="h3">{opcions?.titol}</Typography>
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
							<Instagram color="primary" />
						</a>
					)}
					{opcions?.twitter && (
						<a href={opcions?.twitter} target={"_blank"} rel="noreferrer">
							<Twitter color="primary" />
						</a>
					)}
				</Stack>
			</Box>
		</Toolbar>
	);
}
