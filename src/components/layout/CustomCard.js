import Add from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";

function CustomCard({ title, children, button, onClick, addOn }) {
	return (
		<Box style={{ boxShadow: "#00000030 1px 3px 20px 5px ", padding: 0, borderRadius: 10, marginBottom: 50, position: "relative" }}>
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
			<Box p={2}>{children}</Box>
		</Box>
	);
}

export default CustomCard;
