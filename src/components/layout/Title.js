import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "@/styles/layout.module.css";

const Title = ({ children, button, Icon }) => {
	return (
		<Box className={styles.cardTitle} mx={3} mt={2} px={2} mb={0} pb={0}>
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
				<Box display="flex" alignItems={"center"} p={1}>
					{Icon && (
						<Box mr={2}>
							<Icon fontSize={"large"} />
						</Box>
					)}
					<Typography variant="h3">{children}</Typography>
				</Box>
				<Box>{button}</Box>
			</Box>
		</Box>
	);
};

export default Title;
