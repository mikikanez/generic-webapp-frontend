import * as React from "react";
import { Autocomplete, Chip, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Controller } from "react-hook-form";

export default function CustomAutocomplete({ name, label, register, list, watch, control, setValue, mt }) {
	return (
		<Box mt={mt}>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value, name, ref } }) => (
					<Autocomplete
						value={watch(name)}
						onChange={(event, values) => {
							setValue(name, values);
						}}
						multiple
						id={label}
						options={list?.map((option) => option.nom + " #" + option.numero)}
						freeSolo
						// renderOption={(props, option) => {
						// 	console.log(option);
						// 	return <li {...props}>{option[2] + " #" + option[0]}</li>;
						// }}
						renderTags={(value, getTagProps) =>
							value?.map((option, index) => <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />)
						}
						renderInput={(params) => <TextField {...params} variant="outlined" label={label} placeholder="Cercar" />}
					/>
				)}
			/>
		</Box>
	);
}
