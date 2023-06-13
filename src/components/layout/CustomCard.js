import Add from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import styles from "@/styles/layout.module.css";

function CustomCard({ title, children, button, onClick, addOn }) {
	return (
		<Box className={styles.card}>
			{title && (
				<>
					<Box p={2} display="flex" justifyContent={"space-between"} alignItems="center">
						<Typography variant="h5">{title}</Typography>
						{button && (
							<IconButton onClick={onClick}>
								<Add />
							</IconButton>
						)}
						{addOn ?? ""}
					</Box>
					<Divider />
				</>
			)}
			<Box p={2}>{children}</Box>
		</Box>
	);
}

export default CustomCard;
