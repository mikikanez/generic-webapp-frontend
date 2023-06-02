import * as React from "react";
import { Box, Typography } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";

const Boto = styled(Box)(({ theme }) => ({
	padding: "10px 20px",
	fontSize: 14,
	borderRadius: 10,
	lineHeight: 1.5,
	color: "white",
	backgroundColor: theme.palette.primary.main,
	borderColor: theme.palette.primary.main,
	fontFamily: "Open Sans",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	cursor: "pointer",
	width: "100%",
	transition: "0.2s",
	"& .MuiTypography-root": {
		transition: "0.2s",
		color: "white",
	},
	"&:hover": {
		color: theme.palette.primary.main,
		backgroundColor: "white",
		"& .MuiTypography-root": {
			color: theme.palette.primary.main,
		},
	},
}));

export default function ImageInput({ errors, name, register, trigger, multiple, text }) {
	return (
		<Box my={3} width={"100%"}>
			<Box display="flex" justifyContent="space-between" width={"100%"}>
				<Box>
					<label htmlFor={name} style={{ width: "100%" }}>
						<input
							id={name}
							name={name}
							type="file"
							multiple={multiple}
							{...register(name, {
								onChange: () => {
									trigger(name);
								},
							})}
							style={{
								display: "none",
							}}
						/>
						<Boto
							display="flex"
							alignItems={"center"}
							style={{
								cursor: "pointer",
							}}
						>
							<Add size={15} />
							<Typography
								style={{
									fontSize: 15,
								}}
							>
								{" "}
								{text}
							</Typography>
						</Boto>
					</label>
				</Box>
			</Box>

			<Typography variant="error">{errors?.message}</Typography>
		</Box>
	);
}
