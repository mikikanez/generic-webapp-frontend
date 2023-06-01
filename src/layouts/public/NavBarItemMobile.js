import React from "react";
import navBarStyle from "./NavBarStyle";
import { Typography } from "@mui/material";
import Link from "next/link";

const NavBarItemMobile = ({ className, to, title, closeMenu, ...rest }) => {
	const classes = navBarStyle();

	const onClick = () => {
		closeMenu();
	};

	return (
		<Link
			className={classes.buttonMobile}
			to={{
				pathname: to,
			}}
			underline="none"
			component={RouterLink}
			onClick={onClick}
		>
			<Typography variant="body1">{title}</Typography>
		</Link>
	);
};

export default NavBarItemMobile;
