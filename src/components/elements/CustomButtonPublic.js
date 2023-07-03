import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { CircularProgress, Typography } from "@mui/material";
import { isDark } from "@/core/createTheme";
import { botons } from "../custom/botons";
import { useOpcions } from "@/context/OpcionsContext";

const CustomButtonPublic = ({ title, danger, loading, fullWidth, success, small, light, secondary, opcio, ...rest }) => {
	const theme = useTheme();
	const opcions = useOpcions();
	const Boto = botons.filter((boto) => boto.id === (opcio ? opcio : Number(opcions?.boto)))[0]?.component;

	return (
		<Boto
			style={{
				width: fullWidth ? "100%" : "auto",
				padding: small ? "2px 10px" : "18px 32px",
			}}
			color={danger ? "danger" : success ? "success" : light ? "details" : secondary ? "secondary" : "primary"}
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
					color={light ? "white" : secondary ? (isDark(theme.palette.secondary.main) ? "white" : "black") : "black"}
				>
					{title}
				</Typography>
			)}
		</Boto>
	);
};

export default CustomButtonPublic;
