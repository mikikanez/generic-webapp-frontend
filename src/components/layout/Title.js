import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "@/styles/layout.module.css";

const Title = ({ children, button, Icon }) => {
	return (
		<Box className={styles.title}>
			<Box display="flex" alignItems={"center"} mt={1}>
				{Icon && (
					<Box mr={2}>
						<Icon fontSize={"large"} />
					</Box>
				)}
				<Typography variant="h3">{children}</Typography>
			</Box>
			<Box>{button}</Box>
		</Box>
	);
};

export default Title;
