import React, { useState } from "react";
import "moment/locale/ca";
import CustomCard from "@/components/layout/CustomCard";
import { Box, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, Select, Typography } from "@mui/material";
import { menus } from "@/components/custom/menus";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DragHandle } from "@mui/icons-material";
import CustomCheckbox from "@/components/elements/CustomCheckbox";
import { Controller } from "react-hook-form";

export default function Menus({ watch, setValue, opcions, control, opcio, register }) {
	const [pagines, setPagines] = useState(opcions.filter((m) => m.menu === 1));

	const handleDrop = (droppedItem) => {
		console.log(pagines);
		console.log("ENTRA");
		if (!droppedItem.destination) return;
		var updatedList = [...pagines];
		const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
		updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
		setPagines(updatedList);
		setValue("pagines", updatedList);
	};

	return (
		<Grid spacing={3} container>
			<Grid item md={8}>
				<CustomCard title={"Tipus de menú"}>
					{menus?.map((Item) => (
						<Box
							key={Item.id}
							display={"flex"}
							justifyContent={"space-between"}
							alignItems={"center"}
							mb={3}
							style={{ border: "1px solid lightgrey", borderRadius: 10, backgroundColor: "#f5f5f5" }}
						>
							<Radio checked={watch("menu") === String(Item.id)} onClick={() => setValue("menu", String(Item.id))} />
							<Box style={{ width: "100%", transform: "scale(0.9)" }} borderRadius={1} overflow={"hidden"}>
								<Item.component premenu={watch("premenu")} menuColor={watch("menuColor")} />
							</Box>
						</Box>
					))}
				</CustomCard>
			</Grid>
			<Grid item md={4}>
				<CustomCard title={"Ordre menú"}>
					<DragDropContext onDragEnd={handleDrop}>
						<Droppable droppableId="menu-pagines">
							{(provided) => (
								<div {...provided.droppableProps} ref={provided.innerRef}>
									{pagines.map((item, index) => (
										<Draggable key={item.id} draggableId={String(item.id)} index={index}>
											{(provided) => (
												<div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
													<Box py={1}>
														<Box
															display={"flex"}
															p={2}
															borderRadius={2}
															bgcolor={"white"}
															alignItems={"center"}
															border={"1px solid lightgrey"}
															justifyContent={"space-between"}
														>
															<Box display={"flex"} alignItems={"center"}>
																<DragHandle />
																<Typography ml={2}>{item.titol}</Typography>
															</Box>
															<Typography variant="caption">/{item.slug}</Typography>
														</Box>
													</Box>
												</div>
											)}
										</Draggable>
									))}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					</DragDropContext>
				</CustomCard>
				<CustomCard title={"Opcions"}>
					<FormControlLabel
						control={
							<Controller
								name={"premenu"}
								control={control}
								defaultValue={false}
								render={({ field: { value, ref, ...field } }) => (
									<Checkbox
										{...field}
										inputRef={ref}
										checked={value === "1"}
										color="primary"
										size={"medium"}
										value={1}
										disableRipple
										onChange={(event) => setValue("premenu", event.target.checked ? "1" : "0")}
									/>
								)}
							/>
						}
						label={"Mostrar pre-menú"}
						labelPlacement="end"
					/>
					{/* <FormControlLabel
						control={
							<Controller
								name={"menuColor"}
								control={control}
								defaultValue={false}
								render={({ field: { value, ref, ...field } }) => (
									<Checkbox
										{...field}
										inputRef={ref}
										checked={value === "1"}
										color="primary"
										size={"medium"}
										value={1}
										disableRipple
										onChange={(event) => setValue("menuColor", event.target.checked ? "1" : "0")}
									/>
								)}
							/>
						}
						label={"Menú alternatiu"}
						labelPlacement="end"
					/> */}
				</CustomCard>
				<CustomCard title={"Color"}>
					<FormControl fullWidth>
						<InputLabel htmlFor="menuColor">{opcio("menuColor").descripcio}</InputLabel>
						<Select
							{...register(opcio("menuColor").nom)}
							fullWidth
							variant="outlined"
							label={opcio("menuColor").descripcio}
							defaultValue={opcio("menuColor").valor}
						>
							<MenuItem key={watch("primary")} value={watch("primary")}>
								<Typography color={watch("primary")}>Color primari</Typography>
							</MenuItem>
							<MenuItem key={watch("secondary")} value={watch("secondary")}>
								<Typography color={watch("secondary")}>Color secundari</Typography>
							</MenuItem>

							<MenuItem key={watch("background")} value={watch("background")}>
								<Typography color={watch("background")}>Color fons clar</Typography>
							</MenuItem>

							<MenuItem key={watch("background_dark")} value={watch("background_dark")}>
								<Typography color={watch("background_dark")}>Color fons fosc</Typography>
							</MenuItem>
						</Select>
					</FormControl>
				</CustomCard>
			</Grid>
		</Grid>
	);
}
