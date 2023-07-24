import React from "react";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useOpcions } from "@/context/OpcionsContext";
import { useTheme } from "@emotion/react";

const NoTitol = ({ title = "", hidden = false, scrollY = 0 }) => {
	const opcions = useOpcions();
	const theme = useTheme();

	return (
		<></>
	);
};

export default NoTitol;
