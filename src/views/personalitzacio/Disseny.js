import React from "react";
import "moment/locale/ca";
import CustomCard from "@/components/layout/CustomCard";
import { Controller } from "react-hook-form";
import { Box, FormControl, Grid, InputLabel, MenuItem, Radio, Select } from "@mui/material";
import ColorPicker from "mui-color-picker";

import Thumb from "@/components/elements/Thumb";
import ImageInput from "@/components/elements/InputImage";
import { tipografies } from "@/core/fonts";
import { menus } from "@/components/custom/menus";
import { footers } from "@/components/custom/footers";

export default function Disseny({ register, opcio, watch, setValue, control, trigger, getValues }) {
	return (
		<Grid spacing={3} container>
			<Grid item md={4}>
				<CustomCard title={"Opcions de colors"}>
					<Grid spacing={3} container>
						<Grid item md={6}>
							<Controller
								control={control}
								name={opcio("primary").nom}
								render={({ field: { onChange, onBlur, value, name, ref } }) => (
									<ColorPicker
										onChange={(color) => onChange(color)}
										onBlur={onBlur}
										value={watch("primary")}
										defaultValue={"Color primary"}
										name={name}
										label={opcio("primary").descripcio}
										ref={ref}
										fullWidth
									/>
								)}
							/>
						</Grid>
						<Grid item md={6}>
							<Controller
								control={control}
								name={opcio("secondary").nom}
								render={({ field: { onChange, onBlur, value, name, ref } }) => (
									<ColorPicker
										onChange={(color) => onChange(color)}
										onBlur={onBlur}
										value={watch("secondary")}
										defaultValue={"Color secondari"}
										name={name}
										label={opcio("secondary").descripcio}
										ref={ref}
										fullWidth
									/>
								)}
							/>
						</Grid>
					</Grid>
				</CustomCard>
			</Grid>
			<Grid item md={4}>
				<CustomCard title={"Tipografia"}>
					<FormControl fullWidth>
						<InputLabel htmlFor="tipus">{opcio("font").descripcio}</InputLabel>
						<Select
							{...register(opcio("font").nom)}
							fullWidth
							variant="outlined"
							label={opcio("font").descripcio}
							defaultValue={opcio("font").valor}
						>
							{tipografies?.map((item) => (
								<MenuItem key={item} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</CustomCard>
			</Grid>
			<Grid item md={4}>
				<CustomCard title="Logotip">
					<Thumb file={watch("logo")} />

					<ImageInput name="logo" register={register} trigger={trigger} getValues={getValues} text={"Afegir logotip"} />
				</CustomCard>
			</Grid>
		</Grid>
	);
}
