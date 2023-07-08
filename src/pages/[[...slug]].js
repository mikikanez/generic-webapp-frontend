import Page from "@/components/layout/Page";
import { constructPagina } from "@/core/utils";
import { getData, getDataIds } from "@/lib/API";
import ComponentChooser from "@/views/pagines/ComponentChooser";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export default function Pagina({ pagina }) {
	const variants = {
		hidden: { opacity: 0, x: 0, y: 50 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -100 },
	};

	return (
		<AnimatePresence initial={false} mode="wait">
			<Page title={pagina?.titol} img={pagina?.imatge}>
				<Box>
					{constructPagina(pagina).components.map((com) => (
						<motion.div
							variants={variants} // Pass the variant object into Framer Motion
							initial="hidden" // Set the initial state to variants.hidden
							animate="enter" // Animated state to variants.enter
							exit="exit" // Exit state (used later) to variants.exit
							transition={{ type: "linear" }} // Set the transition to linear
							className=""
							key={com.id}
						>
							<ComponentChooser com={com} pagina={pagina} />
						</motion.div>
					))}
				</Box>
			</Page>
		</AnimatePresence>
	);
}
export async function getStaticPaths() {
	const data = await getDataIds("paginesPublic");
	const paths = data.map((item) => {
		return {
			params: {
				slug: item.slug.split("/"),
			},
		};
	});

	return {
		paths,
		fallback: 'blocking',
	};
}

export async function getStaticProps({ params }) {
	const pagina = await getData("paginesPublic", params.slug ? params.slug : "-");

	return {
		props: { pagina },
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		revalidate: 10, // In seconds
	};
}
