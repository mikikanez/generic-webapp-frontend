import CustomButtonPublic from "@/components/elements/CustomButtonPublic";
import CustomCheckbox from "@/components/elements/CustomCheckbox";
import CustomTextField from "@/components/elements/CustomTextField";
import CustomCard from "@/components/layout/CustomCard";
import Page from "@/components/layout/Page";
import { schemaCheckout } from "@/core/schemas";
import { addElement } from "@/lib/API";
import LlistaCistella from "@/views/checkout/LlistaCistella";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Collapse, Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "usehooks-ts";

export default function Checkout() {
	const { enqueueSnackbar } = useSnackbar();
	const [cart, setCart] = useLocalStorage("cart", []);
	const [preu, setPreu] = useState(0);
	const router = useRouter();

	useEffect(() => {
		let p = 0;
		cart?.map((item) => {
			p = item.producte.preu * item.quantitat + p;
		});
		setPreu(Math.round(p * 100) / 100);
	}, [cart]);

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		getValues,
		control,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schemaCheckout),
	});

	const crearComanda = async (values) => {
		values.preu = preu;
		values.cart = cart;
		values.factura = values.factura ? "1" : "0";
		try {
			await addElement("comandes", values);
			enqueueSnackbar("Pasando al pago...", {
				variant: "success",
			});
			setCart([]);
			router.push("/ok");
		} catch (error) {
			enqueueSnackbar("Algo no ha ido bien...", {
				variant: "error",
			});			
			router.push("/ko");
		}
	};

	const copiarDades = () => {
		setValue("direccio", watch("direccio_enviament"));
		setValue("poblacio", watch("poblacio_enviament"));
		setValue("provincia", watch("provincia_enviament"));
		setValue("codi_postal", watch("codi_postal_enviament"));
		setValue("pais", watch("pais_enviament"));
	};

	return (
		<Page title={"Checkout"}>
			<Box my={15}>
				<Container disableGutters maxWidth="lg">
					<form onSubmit={handleSubmit(crearComanda)}>
						<Grid spacing={3} container>
							<Grid item md={8}>
								<CustomCard title={"Información de contacto"}>
									<Grid container spacing={2}>
										<Grid item md={4}>
											<CustomTextField register={register} label={"Nombre"} name={"nom"} errors={errors} />
										</Grid>
										<Grid item md={4}>
											<CustomTextField register={register} label={"Primer apellido"} name={"cognom1"} errors={errors} />
										</Grid>
										<Grid item md={4}>
											<CustomTextField register={register} label={"Segundo apellido"} name={"cognom2"} errors={errors} />
										</Grid>
									</Grid>
									<Grid container spacing={2} mt={1} mb={1}>
										<Grid item md={6}>
											<CustomTextField register={register} label={"Teléfono"} name={"telefon"} errors={errors} />
										</Grid>
										<Grid item md={6}>
											<CustomTextField register={register} label={"Correo electrónico"} name={"email"} errors={errors} />
										</Grid>
									</Grid>
								</CustomCard>
								<CustomCard title={"Datos de envio"}>
									<Grid container spacing={2} mt={1}>
										<Grid item md={4}>
											<CustomTextField register={register} label={"Dirección"} name={"direccio_enviament"} errors={errors} />
										</Grid>
										<Grid item md={4}>
											<CustomTextField register={register} label={"Población"} name={"poblacio_enviament"} errors={errors} />
										</Grid>
										<Grid item md={4}>
											<CustomTextField register={register} label={"Província"} name={"provincia_enviament"} errors={errors} />
										</Grid>
									</Grid>
									<Grid container spacing={2} mt={1}>
										<Grid item md={6}>
											<CustomTextField register={register} label={"Código postal"} name={"codi_postal_enviament"} errors={errors} />
										</Grid>
										<Grid item md={6}>
											<CustomTextField register={register} label={"País"} name={"pais_enviament"} errors={errors} />
										</Grid>
									</Grid>
								</CustomCard>
								<CustomCheckbox control={control} setValue={setValue} name={"factura"} label={"Necesito factura"} />
								<Collapse in={watch("factura")}>
									<CustomCard
										title={"Datos de facturación"}
										button={<CustomButtonPublic style={{ marginLeft: 20 }} onClick={copiarDades} small title={"Copiar datos de envio"} />}
									>
										<Grid container spacing={2}>
											<Grid item md={6}>
												<CustomTextField register={register} label={"Razón social"} name={"rao"} />
											</Grid>
											<Grid item md={6}>
												<CustomTextField register={register} label={"DNI/NIF"} name={"nif"} />
											</Grid>
										</Grid>
										<Grid container spacing={2} mt={1}>
											<Grid item md={4}>
												<CustomTextField
													register={register}
													label={"Dirección"}
													name={"direccio"}
													InputLabelProps={{
														shrink: true,
													}}
												/>
											</Grid>
											<Grid item md={4}>
												<CustomTextField
													register={register}
													label={"Población"}
													name={"poblacio"}
													InputLabelProps={{
														shrink: true,
													}}
												/>
											</Grid>
											<Grid item md={4}>
												<CustomTextField
													register={register}
													label={"Província"}
													name={"provincia"}
													InputLabelProps={{
														shrink: true,
													}}
												/>
											</Grid>
										</Grid>
										<Grid container spacing={2} mt={1}>
											<Grid item md={6}>
												<CustomTextField
													register={register}
													label={"Código postal"}
													name={"codi_postal"}
													InputLabelProps={{
														shrink: true,
													}}
												/>
											</Grid>
											<Grid item md={6}>
												<CustomTextField
													register={register}
													label={"País"}
													name={"pais"}
													InputLabelProps={{
														shrink: true,
													}}
												/>
											</Grid>
										</Grid>
									</CustomCard>
								</Collapse>
							</Grid>
							<Grid item md={4}>
								<CustomCard title={"Comanda"}>
									<LlistaCistella preu={preu} />
								</CustomCard>
								<CustomButtonPublic title={"Tramitar pedido"} type="submit" fullWidth />
							</Grid>
						</Grid>
					</form>
				</Container>
			</Box>
		</Page>
	);
}
