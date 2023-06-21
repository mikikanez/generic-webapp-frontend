import React, { useState } from "react";
import "moment/locale/ca";
import CustomCard from "@/components/layout/CustomCard";
import { Box, Grid, Radio, Typography } from "@mui/material";
import { menus } from "@/components/custom/menus";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DragHandle } from "@mui/icons-material";

export default function OrdreComponents({ components, setComponentsPreview }) {
	const handleDrop = (droppedItem) => {
		console.log("ENTRA");
		if (!droppedItem.destination) return;
		var updatedList = [...components];
		const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
		updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
		setComponentsPreview(updatedList);
	};

	return (
		<DragDropContext onDragEnd={handleDrop}>
			<Droppable droppableId="menu-pagines">
				{(provided) => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						{components.map((item, index) => (
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
													<Typography ml={2}>{item.component.nom}</Typography>
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
	);
}
