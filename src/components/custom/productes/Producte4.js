import CustomButtonPublic from "@/components/elements/CustomButtonPublic";
import CustomLink from "@/components/elements/CustomLink";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/router";

export const Producte4 = ({ producte, component }) => {
	const router = useRouter();

	return (
		<Product>
			<Box p={5}>
				<Typography variant="h3" fontSize={25} fontWeight={800}>
					{producte.titol}
				</Typography>
			</Box>
			<div style={{ width: "100%", height: 300, position: "relative", textAlign: "left" }}>
				<Image alt="Imatge" src={process.env.NEXT_PUBLIC_STORAGE + producte.imatge} fill style={{ objectFit: "cover" }} />
			</div>
			<Box p={5}>
				<Typography variant="h2" textAlign={"right"} fontWeight={500}>
					{producte.preu} €
				</Typography>
				<Box my={2} />
				<CustomButtonPublic title={"Comprar"} fullWidth secondary onClick={() => router.push("/producte/" + producte.slug)} />
			</Box>
		</Product>
	);
};

const Product = styled(Box)({
	border: "1px solid #EEEEEC",
	"& li": {
		content: '""',
		paddingBottom: 20,
	},
});
