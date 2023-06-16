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
		fontSize: 14,
	},
	"&:hover": {
		backgroundColor: theme.palette.secondary.main,
		border: "2px solid " + theme.palette.secondary.main,
		boxShadow: "0 0 0 0.2rem " + theme.palette.secondary.main,
		"& .MuiTypography-root": {
			color: isDark(theme.palette.primary.main) ? "white" : "black",
			fontSize: 14,
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

const ItailoredButton = ({ title, danger, loading, fullWidth, success, small, round, backgroundColor, color, ...rest }) => {
	const theme = useTheme();

	return (
		<BootstrapButton
			style={{
				width: fullWidth ? "100%" : "auto",
				padding: small ? "2px 10px" : "10px 40px",
				borderRadius: round ? "10px" : "0", 
				background: backgroundColor ? backgroundColor : 'black',
				borderColor: danger ? theme.palette.error.main : success ? theme.palette.success.main : theme.palette.primary.main,
			}}
			{...rest}
			variant="contained"
		>
			{loading ? <CircularProgress size={18} color="info" /> : <Typography sx={{color: color ? color : 'white !important'}}>{title}</Typography>}
		</BootstrapButton>
	);
};

export default ItailoredButton;
