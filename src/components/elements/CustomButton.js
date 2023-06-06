import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import { isDark } from "@/core/createTheme";

const BootstrapButton = styled(Button)(({ theme }) => ({
	boxShadow: "none",
	textTransform: "none",
	fontSize: 14,
	borderRadius: 10,
	lineHeight: 1,
	color: isDark(theme.palette.primary.main) ? "white" : "black",
	fontFamily: "Montserrat",
	background: theme.palette.background.main,
	border: "2px solid " + theme.palette.background.main,
	width: 150,
	"&:hover": {
		backgroundColor: theme.palette.secondary.main,
		border: "2px solid " + theme.palette.secondary.main,
		color: isDark(theme.palette.primary.main) ? "white" : "black",
		boxShadow: "0 0 0 0.2rem " + theme.palette.secondary.main,
	},
	"&:active": {
		boxShadow: "none",
		backgroundColor: theme.palette.background.main,
		borderColor: theme.palette.background.main,
	},
	"&:focus": {
		boxShadow: "0 0 0 0.2rem " + theme.palette.background.main,
	},
}));

const CustomButton = ({ title, danger, loading, fullWidth, success, small, ...rest }) => {
	const theme = useTheme();
	console.log(theme);

	return (
		<BootstrapButton
			style={{
				width: fullWidth ? "100%" : "auto",
				padding: small ? "2px 10px" : "10px 20px",

				background: danger ? theme.palette.error.main : success ? theme.palette.success.main : theme.palette.primary.main,
				borderColor: danger ? theme.palette.error.main : success ? theme.palette.success.main : theme.palette.primary.main,
			}}
			{...rest}
			variant="contained"
		>
			{loading ? <CircularProgress size={18} color="info" /> : title}
		</BootstrapButton>
	);
};

export default CustomButton;
