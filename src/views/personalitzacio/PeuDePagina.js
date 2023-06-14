import React from "react";
import "moment/locale/ca";
import CustomCard from "@/components/layout/CustomCard";
import { Box, Grid, Radio } from "@mui/material";
import { footers } from "@/components/custom/footers";

export default function PeuDePagina({ watch, setValue, opcions = [] }) {
	return (
		<Grid spacing={3} container>
			<Grid item md={8}>
				<CustomCard title={"Tipus de peu de pàgina"}>
					{footers?.map((Item) => (
						<Box key={Item.id} display={"flex"} alignItems={"center"} mb={3}>
							<Radio checked={watch("footer") === String(Item.id)} onClick={() => setValue("footer", String(Item.id))} />
							<Box style={{ width: "100%" }} borderRadius={1} overflow={"hidden"}>
								<Item.component />
							</Box>
						</Box>
					))}
				</CustomCard>
			</Grid>
			<Grid item md={4}>
				<CustomCard title={"Ordre menú"}>
					{opcions?.pagines
						?.filter((i) => i.menu === 2)
						?.map((item) => {
							return item.titol;
						})}
				</CustomCard>
			</Grid>
		</Grid>
	);
}
