import { VerticalSplit } from "@mui/icons-material";
import Component1 from "./imatgeText/Component1";
import Component2 from "./imatgeText/Component2";
import Component3 from "./imatgeText/Component3";
import Component4 from "./imatgeText/Component4";
import Component5 from "./imatgeText/Component5";

export const components = [
	{ id: 1, component: Component1, icon: VerticalSplit },
	{ id: 2, component: Component2, icon: VerticalSplit },
	{ id: 3, component: Component3, icon: VerticalSplit },
	{ id: 4, component: Component4, icon: VerticalSplit },
	{ id: 5, component: Component5, icon: VerticalSplit },
];

export const valor = (index, component) => {
	if (component?.component_pagina_element[index]?.element?.nom === "boto") {
		return JSON.parse(component?.component_pagina_element[index]?.valor);
	} else {
		return component?.component_pagina_element[index]?.valor;
	}
};
