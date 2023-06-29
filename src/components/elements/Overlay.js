import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Overlay = styled(Box)(({ theme, light }) => ({
	backgroundColor: light ? "white" : theme.palette.primary.main,
	opacity: 0.4,
	width: "100%",
	height: "100%",
	position: "absolute",
	top: 0,
	zIndex: 0,
}));
