import { isDark } from "@/core/createTheme";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Input3 = styled(TextField)({
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
