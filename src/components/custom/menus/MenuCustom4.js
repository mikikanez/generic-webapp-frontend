import NavBarItemMobile from "@/layouts/public/NavBarItemMobile";
import { Close, Instagram, Menu, Twitter } from "@mui/icons-material";
import { Box, Drawer, Hidden, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import { isDark } from "@/core/createTheme";
import { useState } from "react";
import { useOpcions } from "@/context/OpcionsContext";
import { PreMenu } from "./PreMenu";
import CistellaMenu from "./CistellaMenu";
import XXSS from "./XXSS";

export default function MenuCustom4({ premenu, scrollY = 0, menuColor }) {
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
						<Box height={60} display={"flex"} alignItems={"center"}>
							<Typography variant="h3" color={isDark(menuColor) ? "white" : "black"}>
								{opcions?.titol}
							</Typography>
						</Box>
					)}
				</Box>

				<Drawer style={{ zIndex: 10000 }} open={menu} onClose={closeMenu} anchor={"top"}>
					<Box justifyContent={"center"} display={"flex"} flexDirection={"column"}>
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
					<IconButton
						style={{ zIndex: 10, marginTop: 5, marginRight: 5 }}
						color="primary"
						aria-controls="simple-menu"
						aria-haspopup="true"
						onClick={openMenu}
					>
						<Menu color={isDark(menuColor) ? "info" : "primary"} />
					</IconButton>
				</Box>
			</Box>
		</Toolbar>
	);
}
