import { Box, Checkbox, Collapse, Fab, Grid, Typography } from "@mui/material";
import CustomTextField from "./CustomTextField";
import { useOpcions } from "@/context/OpcionsContext";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import ImageInput from "./InputImage";
import CustomTiny from "./CustomTiny";
import CustomButton from "./CustomButton";
import Thumb from "./Thumb";
import { Delete } from "@mui/icons-material";

export function RenderElement({ element, defaultValue, register, control, name, setValue, watch, trigger, getValues }) {
	const opcions = useOpcions();
	console.log(element);

	const render = () => {
		switch (element?.nom) {
			case "titol":
				return (
					<CustomTextField
						name={String(name)}
						type="text"
						label={element?.pivot?.descripcio ?? "Títol"}
						register={register}
						defaultValue={defaultValue}
					/>
				);
			case "text":
				return (
					<CustomTextField
						name={String(name)}
						type="text"
						label={element?.pivot?.descripcio ?? "Text"}
						register={register}
						defaultValue={defaultValue}
					/>
				);
			case "imatge":
				return (
					<ImageInputText
						register={register}
						watch={watch}
						name={name}
						defaultValue={defaultValue}
						getValues={getValues}
						trigger={trigger}
						descripcio={element?.pivot?.descripcio ?? "Imatge"}
					/>
				);
			case "boto":
				const valors = defaultValue;
				return (
					<Grid container spacing={3}>
						<Grid item md={6}>
							<CustomTextField name={String(name + "titol")} type="text" label={"Text botó"} register={register} defaultValue={valors?.titol} />
							<small>Deixa el camp buit si vols eliminar el botó</small>
						</Grid>
						<Grid item md={6}>
							<Collapse in={!watch(name + "extern")}>
								<CustomSelect
									name={String(name + "link")}
									label={"Enllaç botó"}
									register={register}
									defaultValue={valors?.link}
									control={control}
									list={opcions.pagines.map((p) => {
										return { id: "/" + p.slug, nom: p.titol };
									})}
								/>
							</Collapse>
							<Collapse in={watch(name + "extern")}>
								<CustomTextField
									name={String(name + "link")}
									type="text"
									label={"Enllaç botó extern"}
									register={register}
									defaultValue={valors?.link}
								/>
							</Collapse>
							<CustomCheckbox
								control={control}
								setValue={setValue}
								name={String(name + "extern")}
								label={"Enllaç extern"}
								// checked={watch}
							/>
						</Grid>
					</Grid>
				);
			case "textarea":
				return (
					<CustomTiny
						name={String(name)}
						type="text"
						label={element?.pivot?.descripcio ?? "Textarea"}
						register={register}
						defaultValue={defaultValue}
						setValue={setValue}
						height={300}
						getValues={getValues}
						watch={watch}
					/>
				);
			case "maps":
				const maps = defaultValue;
				return (
					<Grid container spacing={3}>
						<Grid item md={4}>
							<CustomTextField name={String(name + "apiKey")} type="text" label={"API Key"} register={register} defaultValue={maps?.apiKey} />
						</Grid>
						<Grid item md={4}>
							<CustomTextField name={String(name + "lat")} type="text" label={"Latitud"} register={register} defaultValue={maps?.lat} />
						</Grid>
						<Grid item md={4}>
							<CustomTextField name={String(name + "lng")} type="text" label={"Longitud"} register={register} defaultValue={maps?.lng} />
						</Grid>
					</Grid>
				);

			case "numero":
				return (
					<CustomTextField
						name={String(name)}
						type="number"
						label={element?.pivot?.descripcio ?? "Espai"}
						register={register}
						defaultValue={defaultValue}
					/>
				);
			case "galeria":
				const galeria = watch(String(name)) ?? [];
				console.log(watch(String(name)));
				return (
					<Box my={4}>
						{galeria?.map((item, index) => (
							<Box my={5} p={2} style={{ borderRadius: 10, border: "1px solid #cacaca" }} key={index}>
								<Box display={"flex"} justifyContent={"space-between"} mb={2}>
									<Typography variant="h5" mb={2}>
										Slide {index + 1}
									</Typography>
									{index >= 2 && (
										<Fab
											color="danger"
											size="small"
											onClick={() => {
												setValue(
													String(name),
													galeria.filter((i, index2) => index2 !== index)
												);
											}}
										>
											<Delete />
										</Fab>
									)}
								</Box>
								<Grid container spacing={3}>
									<Grid item md={4}>
										<ImageInputText
											register={register}
											watch={watch}
											name={name + "imatge" + index}
											defaultValue={item.imatge}
											getValues={getValues}
											trigger={trigger}
											descripcio={"Imatge de fons " + (index + 1)}
										/>
									</Grid>
									<Grid item md={4}>
										<CustomTextField
											name={String(name + "titol" + index)}
											type="text"
											label={"Títol"}
											register={register}
											defaultValue={item?.titol}
										/>
									</Grid>
									<Grid item md={4}>
										<CustomTextField
											name={String(name + "subtitol" + index)}
											type="text"
											label={"Subtítol"}
											register={register}
											defaultValue={item?.subtitol}
										/>
									</Grid>
								</Grid>
								<Grid container spacing={3} mt={1}>
									<Grid item md={6}>
										<CustomTextField
											name={String(name + "titolBoto" + index)}
											type="text"
											label={"Text botó"}
											register={register}
											defaultValue={item?.boto?.titolBoto}
										/>
										<small>Deixa el camp buit si vols eliminar el botó</small>
									</Grid>
									<Grid item md={6}>
										<Collapse in={!watch(name + "extern" + index)}>
											<CustomSelect
												name={String(name + "link" + index)}
												label={"Enllaç botó"}
												register={register}
												defaultValue={item?.boto?.link}
												control={control}
												list={opcions.pagines.map((p) => {
													return { id: "/" + p.slug, nom: p.titol };
												})}
											/>
										</Collapse>
										<Collapse in={watch(name + "extern" + index)}>
											<CustomTextField
												name={String(name + "link")}
												type="text"
												label={"Enllaç botó extern"}
												register={register}
												defaultValue={item?.boto?.link}
											/>
										</Collapse>
										<CustomCheckbox
											control={control}
											setValue={setValue}
											name={String(name + "extern" + index)}
											label={"Enllaç extern"}
											// checked={watch}
										/>
									</Grid>
								</Grid>
							</Box>
						))}
						<CustomButton
							title={"Afegir imatge a la galeria"}
							fullWidth
							onClick={() => {
								setValue(String(name), [
									...galeria,
									{
										titol: "Titol nou",
										subtitol: "Subtitol nou",
										imatge: "exemple.jpg",
										boto: { titolBoto: "Text botó", extern: 0, link: "/" },
									},
								]);
							}}
						/>
					</Box>
				);
			case "video":
				return <CustomTextField name={String(name)} type="text" label={"id Video Youtube"} register={register} defaultValue={defaultValue} />;
			default:
		}
	};

	return render();
}

const ImageInputText = ({ descripcio, register, watch, name, defaultValue, getValues, trigger }) => {
	return (
		<Box px={1} bgcolor={"#f0f0f0"} borderRadius={2}>
			<Typography>
				<small>{descripcio}</small>
			</Typography>
			<Box display={"flex"} alignItems={"center"}>
				<Thumb file={watch(String(name))?.length > 0 ? watch(String(name)) : defaultValue} small />
				<ImageInput name={String(name)} register={register} trigger={trigger} getValues={getValues} text={"Afegir imatge"} />
			</Box>
		</Box>
	);
};
