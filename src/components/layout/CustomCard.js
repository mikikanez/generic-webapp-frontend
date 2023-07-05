import Add from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import styles from "@/styles/layout.module.css";

function CustomCard({ title, children, button, onClick, addOn, sticky }) {
	const [scrollY, setScrollY] = useState();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	return (
		<Box className={styles.card}>
			{title && (
				<div className={sticky && scrollY >= 200 ? styles.is_sticky : ""}>
					<Box p={2} display="flex" justifyContent={"flex-start"} alignItems="center">
						<Typography variant="h5">{title}</Typography>
						{button}
						{addOn ?? ""}
					</Box>
					<Divider />
				</div>
			)}
			<Box p={2}>{children}</Box>
		</Box>
	);
}

export default CustomCard;
