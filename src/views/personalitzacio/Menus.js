import React, { useState } from "react";
import "moment/locale/ca";
import CustomCard from "@/components/layout/CustomCard";
import { Box, Checkbox, FormControlLabel, Grid, Radio, Typography } from "@mui/material";
import { menus } from "@/components/custom/menus";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DragHandle } from "@mui/icons-material";
import CustomCheckbox from "@/components/elements/CustomCheckbox";
import { Controller } from "react-hook-form";

export default function Menus({ watch, setValue, opcions, control }) {
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
							style={{ border: "1px solid lightgrey", borderRadius: 10 }}
						>
							<Radio checked={watch("menu") === String(Item.id)} onClick={() => setValue("menu", String(Item.id))} />
							<Box style={{ width: "100%", transform: "scale(0.9)" }} borderRadius={1} overflow={"hidden"}>
								<Item.component premenu={watch("premenu")} />
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
				<CustomCard title={"Pre-menú"}>
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
				</CustomCard>
			</Grid>
		</Grid>
	);
}
