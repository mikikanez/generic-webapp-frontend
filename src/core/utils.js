import { getData } from "@/lib/API";

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
				return JSON.stringify({
					titol: value[elementSel.id + "titol"],
					link: value[elementSel.id + "link"],
					extern: value[elementSel.id + "extern"] ? 1 : 0,
				});
			case "imatge":
				return value[elementSel?.id].length > 0 ? value[elementSel?.id] : elementSel.valor;

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
	return {
		id: id,
		component_id: componentSel.id,
		component: componentSel,
		dark: 0,
		component_pagina_element: componentSel.elements.map((elementSel) => {
			return {
				id: elementSel.id,
				element: elementSel,
				valor: elementSel.nom === "imatge" ? "exemple.jpg" : elementSel.nom === "boto" ? '{"titol": "Text botó", "extern": 0, "link": "/"}' : "Text",
			};
		}),
	};
};
