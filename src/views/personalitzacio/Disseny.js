import React from "react";
import "moment/locale/ca";
import CustomCard from "@/components/layout/CustomCard";
import { Controller } from "react-hook-form";
import { Box, FormControl, Grid, InputLabel, MenuItem, Radio, Select } from "@mui/material";
import ColorPicker from "mui-color-picker";
import Thumb from "@/components/elements/Thumb";
import ImageInput from "@/components/elements/InputImage";
import { tipografies } from "@/core/fonts";
import { Circle } from "@mui/icons-material";
import { botons } from "@/components/custom/botons";
import CustomButton from "@/components/elements/CustomButton";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Disseny({ register, opcio, watch, setValue, control, trigger, getValues }) {
	return (
		<Grid spacing={3} container>
			<Grid item md={4}>
				<CustomCard title={"Opcions de colors"}>
					<Grid spacing={3} container>
						<Grid item md={12}>
							<Box display={"flex"} alignItems={"center"}>
								<Circle style={{ color: watch("primary"), height: 50, width: 50, marginRight: 10 }} />
								<Controller
									control={control}
									name={opcio("primary").nom}
									render={({ field: { onChange, onBlur, value, name, ref } }) => (
										<ColorPicker
											onChange={(color) => onChange(color)}
											onBlur={onBlur}
											value={watch("primary")}
											defaultValue={opcio("primary").descripcio}
											name={name}
											label={opcio("primary").descripcio}
											ref={ref}
											fullWidth
										/>
									)}
								/>
							</Box>
						</Grid>
						<Grid item md={12}>
							<Box display={"flex"} alignItems={"center"}>
								<Circle style={{ color: watch("secondary"), height: 50, width: 50, marginRight: 10 }} />
								<Controller
									control={control}
									name={opcio("secondary").nom}
									render={({ field: { onChange, onBlur, value, name, ref } }) => (
										<ColorPicker
											onChange={(color) => onChange(color)}
											onBlur={onBlur}
											value={watch("secondary")}
											defaultValue={opcio("secondary").descripcio}
											name={name}
											label={opcio("secondary").descripcio}
											ref={ref}
											fullWidth
										/>
									)}
								/>
							</Box>
						</Grid>
						<Grid item md={12}>
							<Box display={"flex"} alignItems={"center"}>
								<Circle style={{ color: watch("details"), height: 50, width: 50, marginRight: 10 }} />
								<Controller
									control={control}
									name={opcio("details").nom}
									render={({ field: { onChange, onBlur, value, name, ref } }) => (
										<ColorPicker
											onChange={(color) => onChange(color)}
											onBlur={onBlur}
											value={watch("details")}
											defaultValue={opcio("details").descripcio}
											name={name}
											label={opcio("details").descripcio}
											ref={ref}
											fullWidth
										/>
									)}
								/>
							</Box>
						</Grid>
						<Grid item md={12}>
							<Box display={"flex"} alignItems={"center"}>
								<Circle style={{ color: watch("background"), height: 50, width: 50, marginRight: 10 }} />
								<Controller
									control={control}
									name={opcio("background").nom}
									render={({ field: { onChange, onBlur, value, name, ref } }) => (
										<ColorPicker
											onChange={(color) => onChange(color)}
											onBlur={onBlur}
											value={watch("background")}
											defaultValue={opcio("background").descripcio}
											name={name}
											label={opcio("background").descripcio}
											ref={ref}
											fullWidth
										/>
									)}
								/>
							</Box>
						</Grid>
						<Grid item md={12}>
							<Box display={"flex"} alignItems={"center"}>
								<Circle style={{ color: watch("background_dark"), height: 50, width: 50, marginRight: 10 }} />
								<Controller
									control={control}
									name={opcio("background_dark").nom}
									render={({ field: { onChange, onBlur, value, name, ref } }) => (
										<ColorPicker
											onChange={(color) => onChange(color)}
											onBlur={onBlur}
											value={watch("background_dark")}
											defaultValue={opcio("background_dark").descripcio}
											name={name}
											label={opcio("background_dark").descripcio}
											ref={ref}
											fullWidth
										/>
									)}
								/>
							</Box>
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
				<CustomCard title={"Tipus de botó"}>
					{botons?.map((Item) => (
						<Box
							key={Item.id}
							display={"flex"}
							justifyContent={"space-between"}
							alignItems={"center"}
							mb={3}
							p={2}
							style={{ border: "1px solid lightgrey", borderRadius: 10 }}
						>
							<Radio checked={watch("boto") === String(Item.id)} onClick={() => setValue("boto", String(Item.id))} />
							<Box style={{ width: "100%" }} overflow={"hidden"}>
								<CustomButtonPublic title={"Prova de botó"} opcio={Item.id} />
							</Box>
						</Box>
					))}
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
