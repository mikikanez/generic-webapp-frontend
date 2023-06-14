import React from "react";
import "moment/locale/ca";
import CustomCard from "@/components/layout/CustomCard";
import { Box, Grid, Radio, Typography } from "@mui/material";
import { menus } from "@/components/custom/menus";

export default function Menus({ watch, setValue, opcions }) {
	return (
		<Grid spacing={3} container>
			<Grid item md={8}>
				<CustomCard title={"Tipus de menú"}>
					{menus?.map((Item) => (
						<Box key={Item.id} display={"flex"} alignItems={"center"} mb={3}>
							<Radio checked={watch("menu") === String(Item.id)} onClick={() => setValue("menu", String(Item.id))} />
							<Box style={{ width: "100%" }} borderRadius={1} overflow={"hidden"}>
								<Item.component />
							</Box>
						</Box>
					))}
				</CustomCard>
			</Grid>
			<Grid item md={4}>
				<CustomCard title={"Ordre menú"}>
					{opcions
						?.filter((i) => i.menu === 1)
						?.map((item) => (
							<Box key={item}>
								<Typography>{item.titol}</Typography>
							</Box>
						))}
				</CustomCard>
			</Grid>
		</Grid>
	);
}
