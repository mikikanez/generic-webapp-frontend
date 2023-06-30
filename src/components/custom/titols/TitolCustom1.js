import React from "react";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useOpcions } from "@/context/OpcionsContext";
import { useTheme } from "@emotion/react";

const TitolCustom1 = ({ title = "Títol pàgina", hidden = false, scrollY = 0 }) => {
	const opcions = useOpcions();
	const theme = useTheme();

	return (
		<Box
			style={{
				backgroundSize: "contain",
				backgroundAttachment: "fixed",
				backgroundColor: theme.palette.background.main,
			}}
			display={hidden ? "none" : ""}
			displayPrint="none"
			py={20}
		>
			<Container maxWidth={"lg"}>
				<Box style={{ opacity: 1 - scrollY / 300 }}>
					<Typography variant="h1">{title}</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default TitolCustom1;
