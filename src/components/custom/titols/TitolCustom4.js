import React from "react";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useOpcions } from "@/context/OpcionsContext";
import { useTheme } from "@emotion/react";
import { Overlay } from "@/components/elements/Overlay";

const TitolCustom4 = ({ title = "Títol pàgina", hidden = false, img = "exemple.jpg", scrollY = 0 }) => {
	const opcions = useOpcions();
	const theme = useTheme();

	return (
		<Box
			style={{
				backgroundImage: `url(${process.env.NEXT_PUBLIC_STORAGE + img})`,
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
				backgroundColor: theme.palette.background.main,
				position: "relative",
				backgroundPositionY: -scrollY / 2,
			}}
			display={hidden ? "none" : ""}
			displayPrint="none"
			py={18}
		>
			<Box zIndex={100} position={"relative"}>
				<Container maxWidth={"lg"}>
					<Box style={{ opacity: 1 - scrollY / 300 }}>
						<Typography variant="h1" color="white" zIndex={100} textAlign={"center"}>
							{title}
						</Typography>
					</Box>
				</Container>
			</Box>
			<Overlay />
		</Box>
	);
};

export default TitolCustom4;
