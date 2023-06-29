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
import { PreMenu } from "./PreMenu";
import NavBarItemLight from "@/layouts/public/NavBarItemLight";

export default function MenuCustom3({ premenu, scrollY = 0, menuAlt }) {
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
				backgroundColor: (menuAlt === "1" ? theme.palette.background.main : theme.palette.primary.main) + (scrollY > 200 ? "E0" : ""),
				flexDirection: "column",
				padding: 0,
			}}
		>
			{premenu === "1" && <PreMenu scrollY={scrollY} />}
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"100%"} px={4}>
				<Hidden mdDown>
					<Box
						style={{
							flex: 1,
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
								<Typography variant="h3" color={isDark(menuAlt === "1" ? opcions?.background : opcions?.primary) ? "white" : "black"}>
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
									menuAlt === "1" ? (
										<NavBarItemLight to={item.to} key={item.title} title={item.title} />
									) : (
										<NavBarItem to={item.to} key={item.title} title={item.title} />
									)
								)}
							</Box>
						</Hidden>
					</Box>
				</Hidden>

				<Hidden mdUp>
					<Box onClick={() => router.push("/")}>{/* <Logo width={150} fill="white" /> */}</Box>
					<IconButton style={{ zIndex: 10 }} color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu}>
						<Menu color={isDark(menuAlt === "1" ? opcions?.background : opcions?.primary) ? "info" : "primary"} />
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
					{premenu !== "1" && (
						<Stack direction={"row"} spacing={2} justifyContent={"center"} mt={1}>
							{opcions?.instagram && (
								<a href={opcions?.instagram} target={"_blank"} rel="noreferrer">
									<Instagram color={isDark(menuAlt === "1" ? opcions?.background : opcions?.primary) ? "info" : "primary"} />
								</a>
							)}
							{opcions?.twitter && (
								<a href={opcions?.twitter} target={"_blank"} rel="noreferrer">
									<Twitter color={isDark(menuAlt === "1" ? opcions?.background : opcions?.primary) ? "info" : "primary"} />
								</a>
							)}
						</Stack>
					)}
				</Box>
			</Box>
		</Toolbar>
	);
}
