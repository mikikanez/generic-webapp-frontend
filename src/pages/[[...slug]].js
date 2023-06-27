import Page from "@/components/layout/Page";
import { constructPagina } from "@/core/utils";
import { getData, getDataIds } from "@/lib/API";
import ComponentChooser from "@/views/pagines/ComponentChooser";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Pagina({ pagina }) {
	return (
		<Page title={pagina?.titol} img={pagina?.imatge}>
			<Box>
				{constructPagina(pagina).components.map((com) => (
					<ComponentChooser key={com.id} com={com} />
				))}
			</Box>
		</Page>
	);
}
export async function getStaticPaths() {
	const data = await getDataIds("pagines");
	const paths = data.map((item) => {
		return {
			params: {
				slug: [item.slug],
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const pagina = await getData("pagines", params.slug ? params.slug[0] : "-");

	return {
		props: { pagina },
	};
}
