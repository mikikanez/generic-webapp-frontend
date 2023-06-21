import { Box, Checkbox, Collapse, Grid } from "@mui/material";
import CustomTextField from "./CustomTextField";
import { useOpcions } from "@/context/OpcionsContext";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import ImageInput from "./InputImage";
import CustomTiny from "./CustomTiny";

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

			default:
		}
	};

	return render();
}
