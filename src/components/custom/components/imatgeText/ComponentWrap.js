import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ComponentWrap({ Component, component, ...props }) {
	const matches = useMediaQuery("(min-width:960px)");
	const [imatges, setImatges] = useState([]);
	const router = useRouter();
	const theme = useTheme();

	useEffect(() => {
		component?.component_pagina_element.map((element, index) => {
			if (element.element?.nom === "imatge") {
				if (element?.valor[0]?.name) {
					let reader = new FileReader();

					reader.onloadend = () => {
						setImatges((prev) => [...prev.filter((m) => m.id !== index), { id: index, imatge: reader.result }]);
					};
					reader?.readAsDataURL(element?.valor[0]);
				} else {
					setImatges((prev) => [...prev.filter((m) => m.id !== index), { id: index, imatge: process.env.NEXT_PUBLIC_STORAGE + element?.valor }]);
				}
			}
		});
	}, [component]);

	return <Component component={component} imatges={imatges} router={router} theme={theme} matches={matches} {...props} />;
}
