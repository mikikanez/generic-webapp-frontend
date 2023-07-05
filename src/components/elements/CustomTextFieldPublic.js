import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const CssTextField = styled(TextField)({
	"& .MuiInputBase-root": {
		fontSize: "15px !important",
	},
	"& input": {
		color: "white",
	},
	"& textarea": {
		color: "white",
	},
	"& label.Mui-focused": {
		color: "white",
	},
	"& label": {
		color: "white",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "white",
	},
	"& .MuiOutlinedInput-root": {
		"& .MuiInputBase-input": {
			fontSize: "15px !important",
		},
		borderRadius: 0,
		"& fieldset": {
			borderColor: "white",
		},
		"&:hover fieldset": {
			borderColor: "white",
		},
		"&.Mui-focused fieldset": {
			borderColor: "white",
		},
	},
});

export default function CustomTextFieldPublic({ errors, label, name, type, register, size, light, mt, adornment, ...rest }) {
	const classes = useStyles();
	return (
		<Box mt={mt} style={{ width: "100%" }}>
			{light ? (
				<CssTextField
					error={Boolean(errors)}
					helperText={errors?.message}
					fullWidth
					label={label}
					name={name}
					type={type}
					variant="outlined"
					{...register(name)}
					{...rest}
				/>
			) : (
				<TextField
					error={Boolean(errors)}
					helperText={errors?.message}
					fullWidth
					label={label}
					name={name}
					type={type}
					size={size === "small" ? "small" : "medium"}
					variant="outlined"
					InputProps={{
						classes:
							size === "small"
								? {
										input: classes.resize,
								  }
								: {},
						startAdornment: adornment,
					}}
					{...register(name)}
					{...rest}
				/>
			)}
		</Box>
	);
}

const useStyles = makeStyles((theme) => ({
	resize: {
		fontSize: "14px !important",
	},
}));
