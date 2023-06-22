import NavBarItem from "@/layouts/public/NavBarItem";
import { Close, Email, Instagram, Menu, Phone, Twitter } from "@mui/icons-material";
import { AppBar, Box, Container, Drawer, Hidden, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import { isDark } from "@/core/createTheme";
import { useOpcions } from "@/context/OpcionsContext";
import { PreMenu } from "./PreMenu";
import NavBarItemMobile from "@/layouts/public/NavBarItemMobile";
import { useState } from "react";

export default function MenuCustom2({ scrollY = 0, premenu }) {
	const theme = useTheme();
	const router = useRouter();
	const opcions = useOpcions();
	const [menu, setMenu] = useState(null);

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
				justifyContent: "center",
				backgroundColor: theme.palette.primary.main,
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
						<Typography variant="h3" color={isDark(opcions?.primary) ? "white" : "black"} my={3}>
							{opcions?.titol}
						</Typography>
					)}
				</Box>
				<Hidden mdDown>
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
				</Hidden>

				<Hidden mdUp>
					<Box onClick={() => router.push("/")}>{/* <Logo width={150} fill="white" /> */}</Box>
					<IconButton style={{ zIndex: 10 }} color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu}>
						<Menu style={{ color: isDark(opcions?.primary) ? "white" : "black" }} />
					</IconButton>
					<Drawer open={menu} onClose={closeMenu} style={{ zIndex: 1000 }}>
						<IconButton onClick={closeMenu}>
							<Close />
						</IconButton>
						{items?.map((item) => (
							<NavBarItemMobile to={item.to} key={item.title} title={item.title} closeMenu={closeMenu} />
						))}
					</Drawer>
				</Hidden>
			</Box>
		</Toolbar>
	);
}
