import React from "react";
import "moment/locale/ca";
import CustomCard from "@/components/layout/CustomCard";
import { Box, Grid, Radio } from "@mui/material";
import { titols } from "@/components/custom/titols";

export default function Titols({ watch, setValue, opcions }) {
	return (
		<Grid spacing={3} container>
			<Grid item md={12}>
				<CustomCard title={"Tipus de títol"}>
					{titols?.map((Item) => (
						<Box
							key={Item.id}
							display={"flex"}
							justifyContent={"space-between"}
							alignItems={"center"}
							mb={3}
							style={{ border: "1px solid lightgrey", borderRadius: 10 }}
						>
							<Radio checked={watch("header") === String(Item.id)} onClick={() => setValue("header", String(Item.id))} />
							<Box style={{ width: "100%", transform: "scale(0.8)" }} borderRadius={1} overflow={"hidden"}>
								<Item.component />
							</Box>
						</Box>
					))}
				</CustomCard>
			</Grid>
		</Grid>
	);
}
