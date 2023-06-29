import React from "react";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { Overlay } from "@/components/elements/Overlay";

const TitolCustom3 = ({ title = "Títol pàgina", hidden = false, img = "exemple.jpg", scrollY = 0 }) => {
	const theme = useTheme();

	return (
		<Box
			style={{
				backgroundImage: `url(${process.env.NEXT_PUBLIC_STORAGE + img})`,
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
				backgroundColor: theme.palette.background.main,
				position: "relative",
				backgroundPositionY: -scrollY / 4,
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
