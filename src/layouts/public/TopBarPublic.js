import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/styles";
import { useOpcions } from "@/context/OpcionsContext";
import MenuCustom1 from "@/components/custom/menus/MenuCustom1";
import MenuCustom2 from "@/components/custom/menus/MenuCustom2";

const TopBarPublic = ({ className, onMobileNavOpen, ...rest }) => {
	const [scrollY, setScrollY] = useState();
	const opcions = useOpcions();

	const items = [
		...opcions?.pagines?.map((item) => {
			return { title: item.titol, to: "/" + item.slug };
		}),
	];

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
				return <MenuCustom1 opcions={opcions} items={items} scrollY={scrollY} />;

			case "2":
				return <MenuCustom2 opcions={opcions} items={items} scrollY={scrollY} />;
			default:
				break;
		}
	};

	return <BoxMain>{returnMenu()}</BoxMain>;
};

const BoxMain = styled(Box)(({ theme }) => ({
	width: "100%",
	transition: "0.2s",
	position: "fixed",
}));

export default TopBarPublic;
