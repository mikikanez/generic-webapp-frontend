import * as React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

export default function CustomCheckbox({ control, setValue, name, label }) {
	return (
		<FormControlLabel
			control={
				<Controller
					name={name}
					control={control}
					defaultValue={false}
					render={({ field: { value, ref, ...field } }) => (
						<Checkbox {...field} inputRef={ref} checked={!!value} color="primary" size={"medium"} disableRipple onClick={() => setValue(name, 0)} />
					)}
				/>
			}
			label={label}
			labelPlacement="end"
		/>
	);
}
