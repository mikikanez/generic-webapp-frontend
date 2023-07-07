import React from "react";
import "moment/locale/ca";
import CustomCard from "@/components/layout/CustomCard";
import { Box, Grid, InputLabel, MenuItem, Radio, Select } from "@mui/material";
import { productes_disseny } from "@/components/custom/productes";
import { productDefault } from "@/core/utils";

export default function Disseny({ register, opcio, watch, setValue, control, trigger, getValues }) {
	return (
		<Grid spacing={3} container>
			<Grid item md={12}>
				<CustomCard title={"Disseny del llistat de productes"}>
					<Grid spacing={7} container>
						{productes_disseny?.map((Item) => (
							<Grid item md={4} key={Item.id}>
								<Box
									display={"flex"}
									justifyContent={"space-between"}
									alignItems={"center"}
									mb={3}
									style={{ border: "1px solid lightgrey", borderRadius: 10, backgroundColor: "#f5f5f5" }}
								>
									<Radio
										checked={watch("producte_disseny") === String(Item.id)}
										onClick={() => setValue("producte_disseny", String(Item.id))}
									/>
									<Box style={{ width: "100%", transform: "scale(0.9)" }} bgcolor={"white"} borderRadius={1} overflow={"hidden"}>
										<Box style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1000 }} />
										<Item.component producte={productDefault()} component={{ dark: false }} />
									</Box>
								</Box>
							</Grid>
						))}
					</Grid>
				</CustomCard>
			</Grid>
		</Grid>
	);
}
