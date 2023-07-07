import NavBarItem from "@/layouts/public/NavBarItem";
import NavBarItemMobile from "@/layouts/public/NavBarItemMobile";
import Close from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import { AppBar, Box, Drawer, Hidden, IconButton, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import { isDark } from "@/core/createTheme";
import { useState } from "react";
import { useOpcions } from "@/context/OpcionsContext";
import { PreMenu } from "./PreMenu";
import NavBarItemLight from "@/layouts/public/NavBarItemLight";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XXSS from "./XXSS";
import CistellaMenu from "./CistellaMenu";

export default function MenuCustom6({ premenu, scrollY = 0, menuColor }) {
	const router = useRouter();
	const [menu, setMenu] = useState(false);
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
		setMenu((prev) => !prev);
	};

	const closeMenu = () => {
		setMenu(null);
	};

	return (
		<Toolbar
			style={{
				transition: "0.2s",
				backgroundColor: menuColor + (scrollY > 200 ? "E0" : ""),
				flexDirection: "column",
				padding: 0,
			}}
		>
			{premenu === "1" && <PreMenu scrollY={scrollY} />}
			<Box display={"flex"} alignItems={"center"} width="100%" px={3} justifyContent={"space-between"}>
				<Box
					style={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",
						cursor: "pointer",
						padding: 15,
					}}
					onClick={() => router.push("/")}
				>
					{opcions?.logo ? (
						<Image src={process.env.NEXT_PUBLIC_STORAGE + opcions?.logo} height={60} width={100} alt="G" style={{ objectFit: "contain" }} />
					) : (
						<Box height={60} display={"flex"} alignItems={"center"}>
							<Typography variant="h3" color={isDark(menuColor) ? "white" : "black"} textTransform={"capitalize"} fontWeight={"bold"}>
								{opcions?.titol}
							</Typography>
						</Box>
					)}
				</Box>
				<Box display={"flex"}>
					<Hidden mdDown>
						<Box
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
							mr={3}
						>
							{items?.map((item) =>
								isDark(menuColor) ? (
									<NavBarItemLight to={item.to} key={item.title} title={item.title} />
								) : (
									<NavBarItem to={item.to} key={item.title} title={item.title} />
								)
							)}
						</Box>
					</Hidden>

					<Box
						style={{
							display: "flex",
							justifyContent: "flex-end",
							alignItems: "center",
						}}
					>
						<XXSS premenu={premenu} opcions={opcions} menuColor={menuColor} />
						<CistellaMenu />
					</Box>
				</Box>
				<Hidden mdUp>
					<IconButton style={{ zIndex: 10 }} color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu}>
						<Menu style={{ color: isDark(menuColor) ? "white" : "black" }} />
					</IconButton>
					<Drawer style={{ zIndex: 10000 }} open={menu} onClose={closeMenu} anchor={"top"}>
						<Box justifyContent={"center"} display={"flex"} flexDirection={"column"} pb={2}>
							<Box textAlign={"center"} my={2}>
								<IconButton onClick={closeMenu}>
									<Close />
								</IconButton>
							</Box>
							{items?.map((item) => (
								<NavBarItemMobile to={item.to} key={item.title} title={item.title} closeMenu={closeMenu} />
							))}
						</Box>
					</Drawer>
				</Hidden>
			</Box>
		</Toolbar>
	);
}
