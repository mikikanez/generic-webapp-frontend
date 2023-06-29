import { getData } from "@/lib/API";
import { useEffect, useState } from "react";

export function slugify(text, separator = "-") {
	return text
		.toString()
		.normalize("NFD") // split an accented letter in the base letter and the acent
		.replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9 ]/g, "") // remove all chars not letters, numbers and spaces (to be replaced)
		.replace(/\s+/g, separator);
}

export const existSlug = async (setValue, setError, clearErrors) => {
	const slug = slugify(watch("titol") ?? "");
	setValue("slug", slug);
	let pagina;
	if (slug.length > 3) {
		pagina = await getData("paginesExist", slug);
		if (pagina) {
			setError("slug", { message: "Ja existeix una pàgina amb aquesta URL" });
			return true;
		} else {
			clearErrors("slug");
			return false;
		}
	}
};

export function constructComponent(componentSel, value) {
	const returnElement = (elementSel) => {
		switch (elementSel.element.nom) {
			case "boto":
				return {
					titol: value[elementSel.id + "titol"],
					link: value[elementSel.id + "link"],
					extern: value[elementSel.id + "extern"] ? 1 : 0,
				};
			case "imatge":
				return value[elementSel?.id].length > 0 ? value[elementSel?.id] : elementSel.valor;
			case "maps":
				return {
					lat: value[elementSel.id + "lat"],
					lng: value[elementSel.id + "lng"],
				};

			case "galeria":
				const elements = value[elementSel.id].map((item, index) => {
					return {
						imatge: value[elementSel.id + "imatge" + index]?.length > 0 ? value[elementSel.id + "imatge" + index] : item.imatge,
						titol: value[elementSel.id + "titol" + index],
						subtitol: value[elementSel.id + "subtitol" + index],
						boto: {
							titolBoto: value[elementSel.id + "titolBoto" + index],
							link: value[elementSel.id + "link" + index],
							extern: value[elementSel.id + "extern" + index] ? 1 : 0,
						},
					};
				});

				return elements;

			case "numero":
				return Number(value[elementSel?.id]);
			default:
				return value[elementSel?.id];
		}
	};

	return {
		id: componentSel?.id,
		component_id: componentSel?.component_id,
		component: componentSel.component,
		dark: value["dark"] ? 1 : 0,
		component_pagina_element: componentSel?.component_pagina_element?.map((elementSel) => {
			return {
				id: elementSel?.id,
				element: elementSel.element,
				valor: returnElement(elementSel),
			};
		}),
	};
}

export const componentDefault = (componentSel, id) => {
	const returnElement = (elementSel) => {
		switch (elementSel.nom) {
			case "boto":
				return { titol: "Text botó", extern: 0, link: "/" };
			case "imatge":
				return "exemple.jpg";
			case "titol":
				return "Ready to get started?";
			case "maps":
				return { lat: 42.115329987765946, lng: 1.8005044550816627 };
			case "galeria":
				return [
					{ imatge: "exemple.jpg", titol: "Títol", subtitol: "Subtítol", boto: { titolBoto: "Text botó", extern: 0, link: "/" } },
					{ imatge: "exemple.jpg", titol: "Títol 2", subtitol: "Subtítol 2", boto: { titolBoto: "Text botó", extern: 0, link: "/" } },
				];
			case "numero":
				return 300;
			case "video":
				return "D2DwYzxYgT4";
			default:
				return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
		}
	};

	return {
		id: id,
		component_id: componentSel.id,
		component: componentSel,
		dark: 0,
		component_pagina_element: componentSel.elements.map((elementSel, index) => {
			return {
				id: index,
				element: elementSel,
				valor: returnElement(elementSel),
			};
		}),
	};
};

export const constructPagina = (pagina) => {
	return {
		...pagina,
		components: pagina.components.map((item) => {
			return {
				...item,
				component_pagina_element: item.component_pagina_element.map((i) => {
					try {
						if (i.element.nom === "galeria") {
							return {
								...i,
								valor: JSON.parse(i.valor)?.map((b) => {
									return { ...b, boto: JSON.parse(b.boto) };
								}),
							};
						} else {
							return {
								...i,
								valor: JSON.parse(i.valor),
							};
						}
					} catch (e) {
						return { ...i, valor: i.valor };
					}
				}),
			};
		}),
	};
};

// Hook
export function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
}
