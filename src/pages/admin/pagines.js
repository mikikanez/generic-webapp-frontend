import React, { useEffect, useState } from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import { Layers } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import { getList } from "@/lib/API";
import { authOptions } from "../api/auth/[...nextauth]";

export default function PaginesAdmin({ pagines }) {
	return (
		<PageAdmin title="Pàgines" Icon={Layers}>
			<Box>
				{pagines?.map((pagina) => (
					<Typography key={pagina?.id} variant="h1">
						{pagina?.titol}
					</Typography>
				))}
			</Box>
		</PageAdmin>
	);
}

export const getServerSideProps = async (context) => {
	let session = [];
	let pagines = [];
	try {
		session = await getServerSession(context.req, context.res, authOptions);
		pagines = await getList("pagines");
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			session: session,
			pagines: pagines,
		},
	};
};
