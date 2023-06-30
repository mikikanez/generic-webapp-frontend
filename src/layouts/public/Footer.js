import React from "react";
import { Box } from "@mui/material";
import { useOpcions } from "@/context/OpcionsContext";
import { footers } from "@/components/custom/footers";

const Footer = () => {
	const opcions = useOpcions();

	const returnFooter = () => {
		const Footer = footers.filter((footer) => footer.id === Number(opcions?.footer))[0].component;
		return <Footer footerColor={opcions?.footerColor} />;
	};

	return <Box>{returnFooter()}</Box>;
};

export default Footer;
