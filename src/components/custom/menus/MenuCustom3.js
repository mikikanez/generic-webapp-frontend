import NavBarItem from "@/layouts/public/NavBarItem";
import NavBarItemMobile from "@/layouts/public/NavBarItemMobile";
import { Close, Instagram, Menu, Twitter } from "@mui/icons-material";
import { AppBar, Box, Drawer, Hidden, IconButton, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import { isDark } from "@/core/createTheme";
import { useState } from "react";
import { useOpcions } from "@/context/OpcionsContext";
import { PreMenu } from "./PreMenu";
import NavBarItemLight from "@/layouts/public/NavBarItemLight";
import CistellaMenu from "./CistellaMenu";
import XXSS from "./XXSS";

export default function MenuCustom3({ premenu, scrollY = 0, menuColor }) {
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
				backgroundColor: menuColor + (scrollY > 200 ? "E0" : ""),
				flexDirection: "column",
				padding: 0,
			}}
		>
			{premenu === "1" && <PreMenu scrollY={scrollY} />}
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"100%"} px={4}>
				<Hidden mdDown>
					<Box
						style={{
							flex: 4,
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
								<Typography variant="h3" color={isDark(menuColor) ? "white" : "black"}>
									{opcions?.titol}
								</Typography>
							</Box>
						)}
						<Hidden mdDown>
							<Box
								style={{
									display: "flex",
									justifyContent: "center",
									marginLeft: 50,
								}}
							>
								{items?.map((item) =>
									isDark(menuColor) ? (
										<NavBarItem to={item.to} key={item.title} title={item.title} />
									) : (
										<NavBarItemLight to={item.to} key={item.title} title={item.title} />
									)
								)}
							</Box>
						</Hidden>
					</Box>
				</Hidden>

				<Hidden mdUp>
					<Box onClick={() => router.push("/")}>
						{opcions?.logo ? (
							<Image src={process.env.NEXT_PUBLIC_STORAGE + opcions?.logo} height={60} width={100} alt="G" style={{ objectFit: "contain" }} />
						) : (
							<Box height={60} display={"flex"} alignItems={"center"}>
								<Typography variant="h3" color={isDark(menuColor) ? "white" : "black"}>
									{opcions?.titol}
								</Typography>
							</Box>
						)}
					</Box>
					<IconButton style={{ zIndex: 10 }} color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu}>
						<Menu color={isDark(menuColor) ? "info" : "primary"} />
					</IconButton>
					<Drawer style={{ zIndex: 10000 }} open={menu} onClose={closeMenu}>
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
					<XXSS premenu={premenu} opcions={opcions} menuColor={menuColor} />

					<CistellaMenu />
				</Box>
			</Box>
		</Toolbar>
	);
}
