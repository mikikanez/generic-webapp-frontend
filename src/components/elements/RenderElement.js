import { Box, Grid } from "@mui/material";
import CustomTextField from "./CustomTextField";
import { useOpcions } from "@/context/OpcionsContext";
import CustomSelect from "./CustomSelect";

export function RenderElement({ element, defaultValue, register, control, name }) {
	const opcions = useOpcions();

	const render = () => {
		switch (element?.nom) {
			case "titol":
				return <CustomTextField name={String(name)} type="text" label={"Títol"} register={register} defaultValue={defaultValue} />;
			case "text":
				return <CustomTextField name={String(name)} type="text" label={"Text"} register={register} defaultValue={defaultValue} />;
			case "imatge":
				return <CustomTextField name={String(name)} type="text" label={"Imatge"} register={register} defaultValue={defaultValue} />;
			case "boto":
				return (
					<Grid container spacing={3}>
						<Grid item md={4}>
							<CustomTextField name={String(name)} type="text" label={"Text botó"} register={register} defaultValue={defaultValue} />
						</Grid>
						<Grid item md={4}>
							<CustomTextField name={String(name)} type="text" label={"Enllaç botó"} register={register} defaultValue={defaultValue} />
						</Grid>
						<Grid item md={4}>
							<CustomSelect
								name={String(name)}
								label={"Enllaç botó"}
								register={register}
								defaultValue={""}
								control={control}
								list={opcions.pagines.map((p) => {
									return { id: p.id, nom: p.titol };
								})}
							/>
						</Grid>
					</Grid>
				);

			default:
		}
	};

	return render();
}
