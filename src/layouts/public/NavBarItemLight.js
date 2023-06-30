import React from "react";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import { isDark } from "@/core/createTheme";

const LinkCustom = styled(Link)(({ theme }) => ({
	paddingLeft: 10,
	paddingRight: 10,
	transition: "0.2s",
	marginLeft: 10,
	marginRight: 10,
	"& .MuiTypography-root": {
		color: theme.palette.primary.main,
		padding: 5,
		fontWeight: 600,
		fontSize: 14,
		transition: "0.2s",
	},
	"&.active": {
		// background: theme.palette.secondary.main,
		"& .MuiTypography-root": {
			color: isDark(theme.palette.primary.main) ? "white" : "black",
		},
	},
	"&:hover": {
		// background: theme.palette.secondary.main,
		"& .MuiTypography-root": {
			color: isDark(theme.palette.primary.main) ? theme.palette.details.main : "black",
		},
	},
}));

const NavBarItemLight = ({ className, to, title, ...rest }) => {
	const router = useRouter();

	return (
		<LinkCustom
			className={(router.pathname === to || router.asPath === to) && "active"}
			href={{
				pathname: to,
			}}
			underline="none"
		>
			<Typography>{title}</Typography>
		</LinkCustom>
	);
};

export default NavBarItemLight;
