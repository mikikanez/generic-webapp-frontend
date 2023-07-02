import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { isDark } from "@/core/createTheme";
import { useOpcions } from "@/context/OpcionsContext";
import { styled } from "@mui/material/styles";

const LinkButton = styled(Button)(({ theme }) => ({
    transition: "0.2s",
    width: "auto",
    cursor: 'pointer',
    borderBottom: '1px solid ' + (isDark(theme.palette.secondary.main) ? theme.palette.primary.main : theme.palette.background.main),
    borderRadius: 0,
    padding: "0px 0px 10px 0px",
    "&:hover": {
        borderBottom: '1px solid ' + (isDark(theme.palette.secondary.main) ? theme.palette.secondary.main : theme.palette.details.main),
    },
}));

const LinkTypo = styled(Typography)(({ theme }) => ({
    transition: "0.2s",
    fontSize: 14,
    color: isDark(theme.palette.secondary.main) ? theme.palette.primary.main : theme.palette.background.main,
    "&:hover": {
        color: isDark(theme.palette.secondary.main) ? theme.palette.secondary.main : theme.palette.details.main
    },
}));

const CustomLink = ({ title, danger, loading, fullWidth, success, small, light, secondary, opcio, ...rest }) => {
	const theme = useTheme();
	const opcions = useOpcions();

	return (
		<LinkButton
			{...rest}
			variant="text"
		>
			{loading ? (
				<CircularProgress size={18} color="info" />
			) : (
				<LinkTypo>
					{title}
				</LinkTypo>
			)}
		</LinkButton>
	);
};

export default CustomLink;
