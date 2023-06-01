import React from "react";
import { Typography } from "@mui/material";
import Link from "next/link";
import styles from "@/styles/layout.module.css";
import { useRouter } from "next/router";

const NavBarItem = ({ className, to, title, ...rest }) => {
	const router = useRouter();

	return (
		<Link
			className={router.pathname === to ? styles.menu_item_active : styles.menu_item}
			href={{
				pathname: to,
			}}
			underline="none"
		>
			<Typography variant="link" color="primary" className={styles.menu_item_title}>
				{title}
			</Typography>
		</Link>
	);
};

export default NavBarItem;
