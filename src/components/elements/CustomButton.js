import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import theme from "@/styles/theme";

const BootstrapButton = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	fontSize: 14,
	borderRadius: 10,
	lineHeight: 1,
	color: theme.palette.secondary.main,
	fontFamily: "Montserrat",
	background: theme.palette.background.main,
	border: "2px solid " + theme.palette.background.main,
	width: 150,
	"&:hover": {
		backgroundColor: "white",
		border: "2px solid " + theme.palette.background.main,
		color: "white",
		boxShadow: "0 0 0 0.2rem " + theme.palette.background.main,
		background: "transparent",
	},
	"&:active": {
		boxShadow: "none",
		backgroundColor: theme.palette.background.main,
		borderColor: theme.palette.background.main,
	},
	"&:focus": {
		boxShadow: "0 0 0 0.2rem " + theme.palette.background.main,
	},
});

const CustomButton = ({ title, danger, loading, fullWidth, success, small, ...rest }) => {
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
