import React from "react";
import "moment/locale/ca";
import Api from "@mui/icons-material/Api";
import Email from "@mui/icons-material/Email";
import Instagram from "@mui/icons-material/Instagram";
import Phone from "@mui/icons-material/Phone";
import Twitter from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CustomCard from "@/components/layout/CustomCard";
import CustomTextField from "@/components/elements/CustomTextField";
import { Checkbox, FormControlLabel, Grid, InputAdornment } from "@mui/material";
import { Controller } from "react-hook-form";

export default function General({ opcio, register, control, setValue }) {
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
						<Grid item md={12}>
							<CustomTextField
								register={register}
								key={opcio("youtube").id}
								name={opcio("youtube").nom}
								label={opcio("youtube").descripcio}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<YouTubeIcon />
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
				<CustomCard title={"Extres"}>
					<Grid spacing={3} container>
						<Grid item md={12}>
							<FormControlLabel
								control={
									<Controller
										name={"entrades"}
										control={control}
										defaultValue={false}
										render={({ field: { value, ref, ...field } }) => (
											<Checkbox
												{...field}
												inputRef={ref}
												checked={value === "1"}
												color="primary"
												size={"medium"}
												value={1}
												disableRipple
												onChange={(event) => setValue("entrades", event.target.checked ? "1" : "0")}
											/>
										)}
									/>
								}
								label={opcio("entrades").descripcio}
								labelPlacement="end"
							/>
						</Grid>
						<Grid item md={12}>
							<FormControlLabel
								control={
									<Controller
										name={"botiga"}
										control={control}
										defaultValue={false}
										render={({ field: { value, ref, ...field } }) => (
											<Checkbox
												{...field}
												inputRef={ref}
												checked={value === "1"}
												color="primary"
												size={"medium"}
												value={1}
												disableRipple
												onChange={(event) => setValue("botiga", event.target.checked ? "1" : "0")}
											/>
										)}
									/>
								}
								label={opcio("botiga").descripcio}
								labelPlacement="end"
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
