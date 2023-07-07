import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { CircularProgress, Typography } from "@mui/material";
import { isDark } from "@/core/createTheme";

const BootstrapButton = styled(Button)(({ theme }) => ({
	boxShadow: "none",
	textTransform: "none",
	borderRadius: 10,
	lineHeight: 1,
	background: theme.palette.background.main,
	border: "2px solid " + theme.palette.background.main,
	width: 150,
	"& .MuiTypography-root": {
		color: isDark(theme.palette.primary.main) ? "white" : "black",
		fontSize: 13,
	},
	"&:hover": {
		backgroundColor: theme.palette.secondary.main,
		border: "2px solid " + theme.palette.secondary.main,
		boxShadow: "0 0 0 0.2rem " + theme.palette.secondary.main,
		"& .MuiTypography-root": {
			color: isDark(theme.palette.primary.main) ? "white" : "black",
			fontSize: 13,
		},
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
			{loading ? <CircularProgress size={18} color="info" /> : <Typography>{title}</Typography>}
		</BootstrapButton>
	);
};

export default CustomButton;
