import React from "react";
import "moment/locale/ca";
import { Api, Email, Instagram, Phone, Twitter } from "@mui/icons-material";
import CustomCard from "@/components/layout/CustomCard";
import CustomTextField from "@/components/elements/CustomTextField";
import { Grid, InputAdornment } from "@mui/material";

export default function General({ opcio, register }) {
	return (
		<Grid spacing={3} container>
			<Grid item md={8}>
				<CustomCard title={"Opcions generals"}>
					<CustomTextField register={register} key={opcio("titol").id} name={opcio("titol").nom} label={opcio("titol").descripcio} />
					<CustomTextField
						register={register}
						key={opcio("descripcio").id}
						name={opcio("descripcio").nom}
						label={opcio("descripcio").descripcio}
						mt={3}
						rows={3}
						multiline
					/>
				</CustomCard>
			</Grid>
			<Grid item md={4}>
				<CustomCard title={"Xarxes socials"}>
					<Grid spacing={3} container>
						<Grid item md={12}>
							<CustomTextField
								register={register}
								key={opcio("instagram").id}
								name={opcio("instagram").nom}
								label={opcio("instagram").descripcio}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<Instagram />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item md={12}>
							<CustomTextField
								register={register}
								key={opcio("twitter").id}
								name={opcio("twitter").nom}
								label={opcio("twitter").descripcio}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<Twitter />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>
				</CustomCard>
				<CustomCard title={"Dades de contacte"}>
					<Grid spacing={3} container>
						<Grid item md={12}>
							<CustomTextField
								register={register}
								key={opcio("telefon").id}
								name={opcio("telefon").nom}
								label={opcio("telefon").descripcio}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<Phone />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item md={12}>
							<CustomTextField
								register={register}
								key={opcio("email").id}
								name={opcio("email").nom}
								label={opcio("email").descripcio}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<Email />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>
				</CustomCard>
				<CustomCard title={"API Keys"}>
					<Grid spacing={3} container>
						<Grid item md={12}>
							<CustomTextField
								register={register}
								key={opcio("apiKey").id}
								name={opcio("apiKey").nom}
								label={opcio("apiKey").descripcio}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<Api />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>
				</CustomCard>
			</Grid>
		</Grid>
	);
}
