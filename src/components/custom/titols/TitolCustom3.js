import React from "react";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useOpcions } from "@/context/OpcionsContext";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";

const Overlay = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	opacity: 0.3,
	width: "100%",
	height: "100%",
	position: "absolute",
	top: 0,
	zIndex: 0,
}));

const TitolCustom3 = ({ title = "Títol pàgina", hidden = false, img = "exemple.jpg", scrollY = 0 }) => {
	const opcions = useOpcions();
	const theme = useTheme();

	return (
		<Box
			style={{
				borderBottom: "1px solid " + theme.palette.primary.main,
				backgroundSize: "contain",
				backgroundAttachment: "fixed",
				backgroundColor: theme.palette.background.main,
				background: `url(${process.env.NEXT_PUBLIC_STORAGE + img})`,
				position: "relative",
				backgroundPositionY: scrollY / 4,
			}}
			display={hidden ? "none" : ""}
			displayPrint="none"
			py={30}
		>
			<Box zIndex={100} position={"relative"}>
				<Container maxWidth={"xl"}>
					<Box style={{ opacity: 1 - scrollY / 300 }}>
						<Typography variant="h1" color="white" zIndex={100}>
							{title}
						</Typography>
					</Box>
				</Container>
			</Box>
			<Overlay />
		</Box>
	);
};

export default TitolCustom3;
