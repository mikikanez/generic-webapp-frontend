import React from "react";
import "moment/locale/ca";
import CustomCard from "@/components/layout/CustomCard";
import CustomTextField from "@/components/elements/CustomTextField";
import { Grid } from "@mui/material";

export default function Parametres({ opcio, register }) {
	return (
		<Grid spacing={3} container>
			<Grid item md={8}>
				<CustomCard title={"Paràmetres compra Redsys"}>
					<CustomTextField register={register} key={opcio("fuc").id} name={opcio("fuc").nom} label={opcio("fuc").descripcio} />
					<CustomTextField
						register={register}
						key={opcio("nom_comerc").id}
						name={opcio("nom_comerc").nom}
						label={opcio("nom_comerc").descripcio}
						mt={3}
					/>
					<CustomTextField register={register} key={opcio("terminal").id} name={opcio("terminal").nom} label={opcio("terminal").descripcio} mt={3} />
					<CustomTextField register={register} key={opcio("key_sha").id} name={opcio("key_sha").nom} label={opcio("key_sha").descripcio} mt={3} />
				</CustomCard>
			</Grid>
			<Grid item md={4}></Grid>
		</Grid>
	);
}
