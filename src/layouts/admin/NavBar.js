import React from "react";
import NavBarItem from "./NavBarItem";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import Dashboard from "@mui/icons-material/Dashboard";
import Link from "next/link";
import Image from "next/image";
import theme from "@/styles/theme";
import Group from "@mui/icons-material/Group";
import { Layers, Settings } from "@mui/icons-material";
import { useOpcions } from "@/context/OpcionsContext";
import { Typography } from "@mui/material";
import { isDark } from "@/core/createTheme";

const BoxMenu = styled(Box)(({ theme }) => ({
	background: theme.palette.primary.main,
	textAlign: "center",
	height: "100%",
	display: "flex",
	flexDirection: "column",
}));

const DrawerCustom = styled(Drawer)(({ theme }) => ({
	"& .MuiPaper-root": {
		width: 256,
		height: "calc(100%)",
		border: 0 + " !important",
	},
}));

const NavBar = ({ onMobileClose, openMobile }) => {
	const opcions = useOpcions();

	const items = [
		{
			href: "/admin",
			icon: Dashboard,
			title: "Inici",
		},

		{
			href: "/admin/usuaris",
			icon: Group,
			title: "Usuaris",
		},
		{
			href: "/admin/configuracio",
			icon: Settings,
			title: "Configuració",
		},
		{},
		{
			href: "/admin/usuaris",
			icon: Layers,
			title: "Pàgines",
		},
		...opcions?.pagines?.map((item) => {
			return { title: item.titol, href: "/admin/pagines/" + item.slug, icon: Layers };
		}),
	];

	const content = (
		<BoxMenu>
			<Box pt={2}>
				<Link href="/">
					{opcions?.logo ? (
						<Image src={process.env.NEXT_PUBLIC_STORAGE + opcions?.logo} height={50} width={240} alt="Logo" style={{ objectFit: "contain" }} />
					) : (
						<Typography variant="h3" color={isDark(opcions?.primary ?? false) ? "white" : "black"}>
							{opcions?.titol} - <small>ADMIN</small>
						</Typography>
					)}
				</Link>
				<Box mt={8} />

				<List>
					{items?.map((item, index) =>
						item.href ? (
							<NavBarItem href={item.href} key={index} title={item.title} icon={item.icon} onClose={onMobileClose} />
						) : (
							<Divider
								key={index}
								style={{
									margin: 17,

									borderColor: theme.palette.background.color + "40",
								}}
							/>
						)
					)}
				</List>
			</Box>
			<Box flexGrow={1} />
		</BoxMenu>
	);

	return (
		<div>
			<Hidden lgUp>
				<DrawerCustom anchor="left" onClose={onMobileClose} open={openMobile} variant="temporary">
					{content}
				</DrawerCustom>
			</Hidden>
			<Hidden lgDown>
				<DrawerCustom anchor="left" open variant="persistent">
					{content}
				</DrawerCustom>
			</Hidden>
		</div>
	);
};

export default NavBar;
