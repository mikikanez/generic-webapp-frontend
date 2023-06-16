import Page from "@/components/layout/Page";
import { getData, getDataIds } from "@/lib/API";
import ComponentChooser from "@/views/pagines/ComponentChooser";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function Pagina({ pagina }) {
	console.log(pagina);
	return (
		<Page title={pagina?.titol}>
			<Box>
				{pagina.component.map((com) => (
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

// export const getServerSideProps = async (context) => {
// 	const session = await getServerSession(context.req, context.res, authOptions);
// 	let maquina = [];
// 	let caracteristiques = [];
// 	if (context?.query?.slug[0] === "edit") {
// 		maquina = await getData("maquines", context?.query.slug[1]);
// 		caracteristiques = await getList("caracteristiques?cat=" + maquina?.categoria_id);
// 	}
// 	const sectors = await getList("sectors");
// 	const aplicacions = await getList("aplicacions");
// 	const categories = await getList("categories");

// 	return {
// 		props: {
// 			maquina: maquina,
// 			sectors: sectors,
// 			aplicacions: aplicacions,
// 			categories: categories,
// 			caracteristiques: caracteristiques,
// 			session: session,
// 		},
// 	};
// };