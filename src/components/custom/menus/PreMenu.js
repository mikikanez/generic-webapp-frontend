import { useOpcions } from "@/context/OpcionsContext";
import { isDark } from "@/core/createTheme";
import { Email, Instagram, Phone, Twitter } from "@mui/icons-material";
import { Box, Container, Hidden, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

export const PreMenu = ({ scrollY = 0 }) => {
	const theme = useTheme();
	const opcions = useOpcions();

	return (
		<Box
			bgcolor={theme.palette.secondary.main}
			width={"100%"}
			px={5}
			height={scrollY > 200 ? 0 : 40}
			style={{ transition: "0.2s", opacity: scrollY > 200 ? 0 : 1 }}
			overflow={"hidden"}
		>
			<Box display={"flex"}>
				<Box>
					<Stack direction={"row"} spacing={2} justifyContent={"center"} mt={1}>
						{opcions?.telefon && (
							<a href={"tel:+34" + opcions?.telefon} target={"_blank"} rel="noreferrer">
								<Box display="flex" alignItems={"center"}>
									<Phone width={"14px"} style={{ color: isDark(opcions?.secondary) ? "white" : "black" }} />
									<Hidden mdDown>
										<Typography ml={1} style={{ color: isDark(opcions?.secondary) ? "white" : "black" }} fontSize={14}>
											{opcions?.telefon}
										</Typography>
									</Hidden>
								</Box>
							</a>
						)}
						{opcions?.email && (
							<a href={"mailto:" + opcions?.email} target={"_blank"} rel="noreferrer">
								<Box display="flex" alignItems={"center"}>
									<Email width={"14px"} style={{ color: isDark(opcions?.secondary) ? "white" : "black" }} />
									<Hidden mdDown>
										<Typography ml={1} style={{ color: isDark(opcions?.secondary) ? "white" : "black" }} fontSize={14}>
											{opcions?.email}
										</Typography>
									</Hidden>
								</Box>
							</a>
						)}
					</Stack>
				</Box>
				<Box
					style={{
						flex: 1,
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<Stack direction={"row"} spacing={2} justifyContent={"center"} mt={1}>
						{opcions?.instagram && (
							<a href={opcions?.instagram} target={"_blank"} rel="noreferrer">
								<Instagram color={isDark(opcions?.secondary) ? "info" : "primary"} />
							</a>
						)}
						{opcions?.twitter && (
							<a href={opcions?.twitter} target={"_blank"} rel="noreferrer">
								<Twitter color={isDark(opcions?.secondary) ? "info" : "primary"} />
							</a>
						)}
					</Stack>
				</Box>
			</Box>
		</Box>
	);
};
