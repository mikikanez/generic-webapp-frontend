import * as React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

export default function CustomCheckbox({ control, setValue, name, label, ...rest }) {
	return (
		<FormControlLabel
			control={
				<Controller
					name={name}
					control={control}
					defaultValue={false}
					render={({ field: { value, ref, ...field } }) => (
						<Checkbox
							{...field}
							{...rest}
							inputRef={ref}
							checked={value}
							color="primary"
							size={"medium"}
							disableRipple
							onClick={() => setValue(name, !value)}
						/>
					)}
				/>
			}
			label={label}
			labelPlacement="end"
		/>
	);
}
