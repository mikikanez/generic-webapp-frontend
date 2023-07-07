import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import { useState } from "react";
import CustomYTVideo from "@/components/elements/CustomYTVideo";

export default function Component37({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box
			style={{
				backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main,
				padding: "5%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			{...props}
		>
			<CustomYTVideo videoID={valor(0, component)} matches={matches} />
		</Box>
	);
}
