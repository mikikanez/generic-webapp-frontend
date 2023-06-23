import { Box, Checkbox, Collapse, Grid, Typography } from "@mui/material";
import CustomTextField from "./CustomTextField";
import { useOpcions } from "@/context/OpcionsContext";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import ImageInput from "./InputImage";
import CustomTiny from "./CustomTiny";
import CustomButton from "./CustomButton";
import Thumb from "./Thumb";

export function RenderElement({ element, defaultValue, register, control, name, setValue, watch, trigger, getValues }) {
	const opcions = useOpcions();

	const render = () => {
		switch (element?.nom) {
			case "titol":
				return <CustomTextField name={String(name)} type="text" label={"Títol"} register={register} defaultValue={defaultValue} />;
			case "text":
				return <CustomTextField name={String(name)} type="text" label={"Text"} register={register} defaultValue={defaultValue} />;
			case "imatge":
				return <ImageInput name={String(name)} register={register} trigger={trigger} getValues={getValues} text={"Afegir imatge"} />;
			case "boto":
				const valors = JSON.parse(defaultValue);
				return (
					<Grid container spacing={3}>
						<Grid item md={6}>
							<CustomTextField name={String(name + "titol")} type="text" label={"Text botó"} register={register} defaultValue={valors?.titol} />
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
						label={"Textarea"}
						register={register}
						defaultValue={defaultValue}
						setValue={setValue}
						height={300}
						getValues={getValues}
						watch={watch}
					/>
				);
			case "maps":
				const maps = JSON.parse(defaultValue);
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
			case "galeria":
				const galeria = JSON.parse(watch(String(name)) ?? []);
				return (
					<Box my={2}>
						{galeria?.map((item, index) => (
							<Box my={2} p={2} style={{ borderRadius: 10, border: "1px solid #cacaca" }} key={index}>
								<Typography mb={2}>Slide {index + 1}</Typography>
								<Grid container spacing={3}>
									<Grid item md={4}>
										<Box display={"flex"} px={1} bgcolor={"#f0f0f0"} borderRadius={2} alignItems={"center"}>
											<Thumb file={watch(String(name + "imatge" + index))} small />
											<ImageInput
												name={String(name + "imatge" + index)}
												register={register}
												trigger={trigger}
												getValues={getValues}
												text={"Afegir imatge"}
											/>
										</Box>
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
							</Box>
						))}
						<CustomButton
							title={"Afegir imatge a la galeria"}
							fullWidth
							onClick={() => {
								setValue(String(name), JSON.stringify([...galeria, { titol: "Titol nou", subtitol: "Subtitol nou", imatge: "exemple.jpg" }]));
							}}
						/>
					</Box>
				);
			default:
		}
	};

	return render();
}
