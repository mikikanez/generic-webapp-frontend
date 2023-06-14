import React from "react";
import "moment/locale/ca";
import CustomCard from "@/components/layout/CustomCard";
import { Box, Grid, Radio } from "@mui/material";
import { menus } from "@/components/custom/menus";

export default function Idiomes({ watch, setValue }) {
	return (
		<Grid spacing={3} container>
			<Grid item md={8}>
				<CustomCard title={"Idiomes"}></CustomCard>
			</Grid>
			<Grid item md={4}></Grid>
		</Grid>
	);
}
