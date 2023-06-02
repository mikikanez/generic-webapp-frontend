import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled, useTheme } from "@mui/material/styles";

const ListItemCustom = styled(ListItem)(({ theme }) => ({
	display: "flex",
	paddingTop: 0,
	paddingBottom: 0,
	transition: "0.5s",
	zIndex: 1000,
}));

const BoxButton = styled(Box)(({ theme }) => ({
	marginTop: 5,
	marginBottom: 15,
	marginRight: 10,
	marginLeft: 10,
	borderRadius: 10,
	justifyContent: "flex-start",
	alignItems: "center",
	letterSpacing: 0,
	transition: "0.2s",
	padding: 10,
	textTransform: "none",
	display: "flex",
	width: "100%",
	textDecoration: "none",
	position: "relative",
	"&:hover": {
		color: "white",
		marginLeft: 20,
		marginRight: -10,
		"& .icon": {
			color: "white",
		},
		"& .title": {
			color: "white",
		},
	},
	"& .icon": {
		color: "white",
	},
	"&.active": {
		backgroundColor: "white",
		color: "white",
		boxShadow: "0px 0px 8px 0px " + theme.palette.secondary.main,
		marginLeft: 20,
		marginRight: -10,

		"& .title": {
			color: theme.palette.primary.main,
		},
		"& .icon": {
			color: theme.palette.primary.main,
		},
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
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
	color: "white",
	fontWeight: 400,
}));

const IconCustom = styled(Box)(({ theme }) => ({
	"&.icon": {
		color: "white",
		marginRight: theme.spacing(1),
	},
}));

const NavBarItem = ({ className, href, icon: Icon, title, onClose, ...rest }) => {
	const router = useRouter();

	return (
		<ListItemCustom disableGutters {...rest} sx={{ padding: 0 }}>
			<BoxButton className={href === router.pathname ? "active" : ""} component={Link} href={href} onClick={onClose} color="secondary">
				<IconCustom mr={1}>
					<Icon className={"icon"} size="20" />
				</IconCustom>

				<Title className="title">{title}</Title>
			</BoxButton>
		</ListItemCustom>
	);
};

export default NavBarItem;
