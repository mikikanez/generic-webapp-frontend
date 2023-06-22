export function constructFormPagina(values) {
	const data = new FormData();

	if (values.imatge?.[0]?.name) {
		data.append("imatge", values.imatge[0], values.imatge[0].name);
	}
	data.append("titol", values.titol);
	data.append("slug", values.slug ?? "");
	data.append("idioma_id", values.idioma_id);
	data.append("keywords", values.keywords ?? "");
	data.append("menu", values.menu);
	data.append("pagina_pare_id", values.pagina_pare_id ?? "");

	values.components.map((component, index) => {
		data.append(`components[${index}][component_id]`, component?.component_id);
		data.append(`components[${index}][dark]`, component?.dark);
		component.component_pagina_element.map((element, index2) => {
			data.append(`components[${index}][component_pagina_element][${index2}][id]`, element.id);
			data.append(`components[${index}][component_pagina_element][${index2}][element_id]`, element.element.id);
			data.append(`components[${index}][component_pagina_element][${index2}][element_tipus]`, element.element.nom);
			if (element.valor?.[0]?.name) {
				data.append(`components[${index}][component_pagina_element][${index2}][isFile]`, 1);
				data.append(`components[${index}][component_pagina_element][${index2}][valor]`, element.valor[0], element.valor[0].name);
			} else {
				data.append(`components[${index}][component_pagina_element][${index2}][isFile]`, 0);
				data.append(`components[${index}][component_pagina_element][${index2}][valor]`, element.valor);
			}
		});
	});

	return data;
}
