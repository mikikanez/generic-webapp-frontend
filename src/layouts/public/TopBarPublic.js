import React, { useEffect, useState } from "react";
import { AppBar, Box } from "@mui/material";
import { styled } from "@mui/styles";
import { useOpcions } from "@/context/OpcionsContext";
import { menus } from "@/components/custom/menus";

const TopBarPublic = ({ className, onMobileNavOpen, ...rest }) => {
	const [scrollY, setScrollY] = useState();
	const opcions = useOpcions();

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
		const Menu = menus.filter((menu) => menu.id === Number(opcions?.menu))[0].component;
		return <Menu scrollY={scrollY} premenu={opcions?.premenu} menuColor={opcions?.menuColor} />;
	};

	return (
		<BoxMain>
			<CustomAppBar elevation={0}>{returnMenu()}</CustomAppBar>
		</BoxMain>
	);
};

const BoxMain = styled(Box)(({ theme }) => ({
	width: "100%",
	transition: "0.2s",
	position: "fixed",
	zIndex: 10000,
}));

const CustomAppBar = styled(AppBar)(({ theme }) => ({
	boxShadow: "none",
	zIndex: 10000,
	backgroundColor: "transparent",
}));

export default TopBarPublic;
