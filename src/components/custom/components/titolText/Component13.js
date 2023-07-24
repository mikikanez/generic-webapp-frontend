import { Box, Container, Typography } from "@mui/material";
import { valor } from "..";
import { useOpcions } from "@/context/OpcionsContext";

export default function Component13({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container disableGutters maxWidth="lg" style={{ position: "relative" }}>
				<Box display={"flex"} flexDirection={"column"} alignItems={"center"} py={2} px={3} maxWidth={matches ? '60%' : '90%'} margin={'0 auto'}>
					{valor(2, component) && (
						<Typography
							variant="body1"
							textAlign={"center"}
							fontWeight={"bold"}
							textTransform={"unset"}
							mb={3}
							color={Number(component.dark) ? theme.palette.details.main : theme.palette.secondary.main}
						>
							{valor(2, component)}
						</Typography>
					)}
					{valor(0, component) && (
						<Typography
							variant="h2"
							textAlign={"center"}
							fontWeight={"bold"}
							textTransform={"unset"}
							mb={3}
							color={Number(component.dark) ? "white" : "black"}
						>
							{valor(0, component)}
						</Typography>
					)}
					{valor(1, component) && (
						<Box>
							<Typography
								dangerouslySetInnerHTML={{ __html: valor(1, component) }}
								variant="body1"
								textAlign={"center"}
								color={Number(component.dark) ? "white" : theme.palette.background.dark}
							></Typography>
						</Box>
					)}
				</Box>
			</Container>
		</Box>
	);
}
