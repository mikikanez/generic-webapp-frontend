import { Instagram, Twitter } from "@mui/icons-material";
import { Hidden, Stack } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { isDark } from "@/core/createTheme";

export default function XXSS({ premenu, opcions, menuColor }) {
	return (
		<Hidden mdDown>
			{premenu !== "1" && (
				<Stack direction={"row"} spacing={2} justifyContent={"center"} mt={1}>
					{opcions?.instagram && (
						<a href={opcions?.instagram} target={"_blank"} rel="noreferrer">
							<Instagram color={isDark(menuColor) ? "info" : "primary"} />
						</a>
					)}
					{opcions?.twitter && (
						<a href={opcions?.twitter} target={"_blank"} rel="noreferrer">
							<Twitter color={isDark(menuColor) ? "info" : "primary"} />
						</a>
					)}
					{opcions?.youtube && (
						<a href={opcions?.youtube} target={"_blank"} rel="noreferrer">
							<YouTubeIcon color={isDark(menuColor) ? "info" : "primary"} />
						</a>
					)}
				</Stack>
			)}
		</Hidden>
	);
}
