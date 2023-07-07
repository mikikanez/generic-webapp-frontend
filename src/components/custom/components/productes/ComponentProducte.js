import CustomButtonPublic from "@/components/elements/CustomButtonPublic";
import { isDark } from "@/core/createTheme";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { Box, Container, Divider, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "usehooks-ts";

export default function ComponentProducte({ component, matches, theme, router, ...props }) {
	const { enqueueSnackbar } = useSnackbar();
	const [cart, setCart] = useLocalStorage("cart", []);

	const {
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
		reset,
	} = useForm({ defaultValues: { quantitat: 0 } });

	const action = () => (
		<Link href="/checkout">
			<Typography color="secondary">Pagar</Typography>
		</Link>
	);

	const afegir = async (values) => {
		if (values.quantitat > 0) {
			values.producte = props.pagina;
			values.index = cart.length + 1;

			setCart([...cart, values]);
			enqueueSnackbar('Producte "' + values.producte.titol + '" afegit', {
				variant: "success",
				action,
			});
			reset();
		} else {
			enqueueSnackbar("No puedes añadir 0", {
				variant: "error",
			});
		}
	};

	const addQuant = () => {
		if (props.pagina.stock) setValue("quantitat", watch("quantitat") < props.pagina.stock ? watch("quantitat") + 1 : watch("quantitat"));
		else setValue("quantitat", watch("quantitat") + 1);
	};

	const removeQuant = () => {
		setValue("quantitat", watch("quantitat") > 0 ? watch("quantitat") - 1 : 0);
	};

	return (
		<Box>
			<Container disableGutters maxWidth="lg">
				<Grid container spacing={5} my={20}>
					<Grid item md={5}>
						<div style={{ width: "100%", height: "100%", position: "relative", textAlign: "left" }}>
							<Image alt="Imatge" src={process.env.NEXT_PUBLIC_STORAGE + props.pagina.imatge} fill style={{ objectFit: "cover" }} />
						</div>
					</Grid>
					<Grid item md={7}>
						<Typography variant="h2" mb={3}>
							{props.pagina.titol}
						</Typography>
						<Divider style={{ width: "20%", borderColor: theme.palette.primary.main }} />
						<Typography variant="h3" mt={3}>
							{props.pagina.preu}€
						</Typography>
						<Typography
							dangerouslySetInnerHTML={{ __html: props.pagina.descripcio }}
							variant="body1"
							textAlign={"left"}
							color={Number(component.dark) ? "white" : "black"}
							mt={4}
						></Typography>
						<form onSubmit={handleSubmit(afegir)}>
							<Box my={5}>
								<Box display={"flex"} justifyContent={"space-between"}>
									<Typography variant="h5">Quantitat</Typography>
									<Box>
										<IconButton size="small" onClick={removeQuant}>
											<Remove />
										</IconButton>
										{watch("quantitat")}
										<IconButton size="small" onClick={addQuant}>
											<Add />
										</IconButton>
									</Box>
								</Box>
							</Box>
							<CustomButtonPublic title={"Afegir a la cistella"} type="submit" fullWidth />
						</form>
					</Grid>
				</Grid>
			</Container>
			{props.pagina.especificacions && (
				<Box py={15} bgcolor={theme.palette.background.dark}>
					<Container>
						<Typography
							dangerouslySetInnerHTML={{ __html: props.pagina.especificacions }}
							variant="body1"
							textAlign={"left"}
							color={isDark(theme.palette.background.dark) ? "white" : "black"}
						></Typography>
					</Container>
				</Box>
			)}

			<Box py={20}>
				<Container>
					<Typography variant="h3">Altres productes</Typography>
				</Container>
			</Box>
		</Box>
	);
}
