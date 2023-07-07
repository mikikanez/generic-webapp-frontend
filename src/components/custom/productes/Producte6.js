import CustomButtonPublic from "@/components/elements/CustomButtonPublic";
import CustomLink from "@/components/elements/CustomLink";
import { isDark } from "@/core/createTheme";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/router";

export const Producte6 = ({ producte, component }) => {
	const router = useRouter();
	const theme = useTheme();

	return (
		<Product onClick={() => router.push("/producte/" + producte.slug)}>
			<div style={{ width: "100%", height: 250, position: "relative", textAlign: "left" }}>
				<Image alt="Imatge" src={process.env.NEXT_PUBLIC_STORAGE + producte.imatge} fill style={{ objectFit: "cover" }} />
			</div>
			<Box p={5} bgcolor={theme.palette.background.dark + "40"}>
				<Typography variant="h3" className="text" fontSize={25} fontWeight={800} color={theme.palette.background.dark}>
					{producte.titol}
				</Typography>
				<Typography
					dangerouslySetInnerHTML={{ __html: producte.descripcio.substring(0, 50) + "..." }}
					variant="body1"
					textAlign={"left"}
					color={component.dark ? "white" : "black"}
					mt={4}
					mb={4}
					className="text"
				></Typography>
				<Typography variant="h2" color="secondary" className="text" mt={2} fontWeight={500}>
					{producte.preu} €
				</Typography>
				{/* <CustomButtonPublic title={"Comprar"} fullWidth onClick={() => router.push("/producte/" + producte.slug)} /> */}
			</Box>
		</Product>
	);
};

const Product = styled(Box)(({ theme }) => ({
	border: "1px solid #EEEEEC",
	transition: "0.2s",
	cursor: "pointer",
	"& li": {
		content: '""',
		paddingBottom: 20,
	},
	"&:hover": {
		backgroundColor: theme.palette.secondary.main,
		"& .text": {
			color: isDark(theme.palette.secondary.main) ? "white" : "black",
		},
	},
}));
