import React, { useEffect, useState } from "react";
import { AppBar, Box } from "@mui/material";
import { styled } from "@mui/styles";
import { useOpcions } from "@/context/OpcionsContext";
import MenuCustom1 from "@/components/custom/menus/MenuCustom1";
import MenuCustom2 from "@/components/custom/menus/MenuCustom2";
import { useTheme } from "@emotion/react";
import MenuCustom4 from "@/components/custom/menus/MenuCustom4";
import MenuCustom3 from "@/components/custom/menus/MenuCustom3";

const TopBarPublic = ({ className, onMobileNavOpen, ...rest }) => {
	const [scrollY, setScrollY] = useState();
	const opcions = useOpcions();
	const theme = useTheme();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	const returnMenu = () => {
		switch (opcions.menu) {
			case "1":
				return <MenuCustom1 scrollY={scrollY} />;

			case "2":
				return <MenuCustom2 scrollY={scrollY} />;

			case "3":
				return <MenuCustom3 scrollY={scrollY} />;

			case "4":
				return <MenuCustom4 scrollY={scrollY} />;
			default:
				break;
		}
	};

	return (
		<BoxMain>
			<AppBar
				elevation={0}
				style={{
					boxShadow: "none",
					zIndex: 10000,
					backgroundColor: "transparent",
				}}
			>
				{returnMenu()}
			</AppBar>
		</BoxMain>
	);
};

const BoxMain = styled(Box)(({ theme }) => ({
	width: "100%",
	transition: "0.2s",
	position: "fixed",
}));

export default TopBarPublic;
