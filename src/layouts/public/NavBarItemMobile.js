import React from "react";
import { Typography } from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";
import { isDark } from "@/core/createTheme";
import { useRouter } from "next/router";

const LinkCustom = styled(Link)(({ theme }) => ({
	paddingLeft: 10,
	paddingRight: 10,
	transition: "0.2s",
	marginLeft: 10,
	marginRight: 10,
	"& .MuiTypography-root": {
		padding: 5,
		fontWeight: 600,
		fontSize: 14,
	},
	"&.active": {
		background: theme.palette.secondary.main,
		"& .MuiTypography-root": {
			color: isDark(theme.palette.secondary.main) ? "white" : "black",
		},
	},
	"&:hover": {
		background: theme.palette.secondary.main,
		"& .MuiTypography-root": {
			color: isDark(theme.palette.secondary.main) ? "white" : "black",
		},
	},
}));

const NavBarItemMobile = ({ className, to, title, closeMenu, ...rest }) => {
	const router = useRouter();
	const onClick = () => {
		closeMenu();
	};

	return (
		<LinkCustom
			className={(router.pathname === to || router.asPath === to) && "active"}
			href={{
				pathname: to,
			}}
			underline="none"
			onClick={onClick}
			style={{ textAlign: "center", padding: 10 }}
		>
			<Typography variant="body1">{title}</Typography>
		</LinkCustom>
	);
};

export default NavBarItemMobile;
