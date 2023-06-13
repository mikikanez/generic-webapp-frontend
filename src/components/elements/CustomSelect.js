import * as React from "react";
import { Chip, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { Controller } from "react-hook-form";

export default function CustomSelect({ name, label, register, list, multiple, control, defaultValue, mt, keyName }) {
	return (
		<Box mt={mt}>
			<FormControl fullWidth>
				<InputLabel htmlFor="tipus">{label}</InputLabel>
				{multiple ? (
					<Controller
						control={control}
						name={name}
						render={({ field: { onChange, onBlur, value, name, ref } }) => (
							<Select
								options={list}
								fullWidth
								variant="outlined"
								onChange={onChange}
								onBlur={onBlur}
								value={value}
								name={name}
								label={label}
								ref={ref}
								multiple
								defaultValue={defaultValue}
								renderValue={(selected) => (
									<Box
										sx={{
											display: "flex",
											flexWrap: "wrap",
											gap: 0.5,
										}}
									>
										{selected?.map((value) => {
											return <Chip key={value.id} value={value} label={list.filter((item) => item.id === value)[0]?.nom} />;
										})}
									</Box>
								)}
							>
								{list?.map((item) => (
									<MenuItem key={item.id} value={item.id}>
										{item?.nom}
									</MenuItem>
								))}
							</Select>
						)}
					/>
				) : (
					<Select {...register(name)} fullWidth variant="outlined" label={label} defaultValue={defaultValue}>
						{list?.map((item) => (
							<MenuItem key={item.id} value={item.id}>
								{keyName ? item[keyName] : item.nom}
							</MenuItem>
						))}
					</Select>
				)}
			</FormControl>
		</Box>
	);
}
