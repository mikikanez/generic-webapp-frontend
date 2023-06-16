import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { CircularProgress, Typography } from "@mui/material";
import { isDark } from "@/core/createTheme";

const BootstrapButton = styled(Button)(({ theme }) => ({
	boxShadow: "none",
	textTransform: "none",
	borderRadius: 0,
	lineHeight: 1,

	"&:hover": {
		backgroundColor: theme.palette.secondary.main,
		boxShadow: "0 0 0 0.2rem " + theme.palette.secondary.main,
		"& .MuiTypography-root": {
			color: isDark(theme.palette.secondary.main) ? "white" : "black",
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

const CustomButtonPublic = ({ title, danger, loading, fullWidth, success, small, light, secondary, ...rest }) => {
	const theme = useTheme();

	return (
		<BootstrapButton
			style={{
				width: fullWidth ? "100%" : "auto",
				padding: small ? "2px 10px" : "15px 50px",
				// background: danger ? theme.palette.error.main : success ? theme.palette.success.main : light ? "white" : theme.palette.primary.main,
				// borderColor: danger ? theme.palette.error.main : success ? theme.palette.success.main : theme.palette.primary.main,
			}}
			color={danger ? "danger" : success ? "success" : light ? "info" : secondary ? "secondary" : "primary"}
			{...rest}
			variant="contained"
		>
			{loading ? (
				<CircularProgress size={18} color="info" />
			) : (
				<Typography
					style={{
						fontSize: 18,
						transition: "0.2s",
					}}
					color={light ? "black" : secondary ? (isDark(theme.palette.secondary.main) ? "white" : "black") : "white"}
				>
					{title}
				</Typography>
			)}
		</BootstrapButton>
	);
};

export default CustomButtonPublic;
