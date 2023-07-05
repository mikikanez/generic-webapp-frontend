import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled, useTheme } from "@mui/material/styles";
import { isDark } from "@/core/createTheme";

const ListItemCustom = styled(ListItem)(({ theme }) => ({
	display: "flex",
	paddingTop: 0,
	paddingBottom: 0,
	transition: "0.5s",
	zIndex: 1000,
}));

const BoxButton = styled(Box)(({ theme }) => ({
	marginRight: 5,
	marginLeft: 0,
	borderTopRightRadius: 50,
	borderBottomRightRadius: 50,
	justifyContent: "flex-start",
	alignItems: "center",
	letterSpacing: 0,
	transition: "0.2s",
	padding: 6,
	paddingLeft: 15,
	textTransform: "none",
	display: "flex",
	width: "100%",
	textDecoration: "none",
	position: "relative",

	"& .title": {
		fontSize: 15,
	},
	"&:hover": {
		marginRight: 0,
		backgroundColor: "#000000" + "20",
	},
	"&.active": {
		backgroundColor: theme.palette.primary.main,
		color: "black",
		boxShadow: "0px 0px 8px 0px " + theme.palette.primary.main + 80,

		"& .title": {
			color: isDark(theme.palette.primary.main) ? "white" : "black",
		},
		"& .icon": {
			color: isDark(theme.palette.primary.main) ? "white" : "black",
		},
		"&:hover": {
			// backgroundColor: theme.palette.secondary.main,
			color: theme.palette.primary.main,
			"& title": {
				color: theme.palette.primary.main,
			},
			"& icon": {
				color: theme.palette.primary.main,
			},
		},
	},
}));

const Title = styled(Typography)(({ theme }) => ({
	fontWeight: 400,
}));

const IconCustom = styled(Box)(({ theme }) => ({
	"&.icon": {
		color: "white",
		marginRight: theme.spacing(1),
	},
}));

const NavBarItem = ({ className, href, icon: Icon, title, pagines, onClose, ...rest }) => {
	const router = useRouter();

	return (
		<ListItemCustom disableGutters {...rest}>
			<BoxButton
				className={router.pathname === href || router.asPath === href ? "active" : ""}
				component={Link}
				href={href}
				onClick={onClose}
				color="secondary"
			>
				<IconCustom mr={1}>
					<Icon className={"icon"} size="20" />
				</IconCustom>

				<Title className="title">{title}</Title>
			</BoxButton>
		</ListItemCustom>
	);
};

export default NavBarItem;
