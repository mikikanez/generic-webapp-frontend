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
				padding: small ? "2px 10px" : "15px 50px",
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
		</Boto>
	);
};

export default CustomButtonPublic;
