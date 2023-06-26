import React, { useState } from "react";
import "moment/locale/ca";
import CustomCard from "@/components/layout/CustomCard";
import { Box, Checkbox, FormControlLabel, Grid, Radio, Typography } from "@mui/material";
import { footers } from "@/components/custom/footers";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DragHandle } from "@mui/icons-material";
import { Controller } from "react-hook-form";

export default function PeuDePagina({ watch, setValue, opcions = [], control }) {
	const [pagines, setPagines] = useState(opcions.filter((m) => m.menu === 2));

	const handleDrop = (droppedItem) => {
		console.log("ENTRA");
		if (!droppedItem.destination) return;
		var updatedList = [...pagines];
		const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
		updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
		setPagines(updatedList);
	};

	return (
		<Grid spacing={3} container>
			<Grid item md={8}>
				<CustomCard title={"Tipus de peu de pàgina"}>
					{footers?.map((Item) => (
						<Box key={Item.id} display={"flex"} alignItems={"center"} mb={3}>
							<Radio checked={watch("footer") === String(Item.id)} onClick={() => setValue("footer", String(Item.id))} />
							<Box style={{ width: "100%" }} borderRadius={1} overflow={"hidden"}>
								<Item.component footerAlt={watch("footerAlt")} />
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
				<CustomCard title={"Ordre menú"}>
					<FormControlLabel
						control={
							<Controller
								name={"footerAlt"}
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
										onChange={(event) => setValue("footerAlt", event.target.checked ? "1" : "0")}
									/>
								)}
							/>
						}
						label={"Peu de pàgina alternatiu"}
						labelPlacement="end"
					/>
				</CustomCard>
			</Grid>
		</Grid>
	);
}
