import { VerticalSplit } from "@mui/icons-material";
import Component1 from "./imatgeText/Component1";
import Component2 from "./imatgeText/Component2";
import Component3 from "./imatgeText/Component3";
import Component4 from "./imatgeText/Component4";
import Component5 from "./imatgeText/Component5";
import Component6 from "./imatgeText/Component6";
import Component7 from "./imatgeText/Component7";
import Component8 from "./imatgeText/Component8";
import Component9 from "./imatgeText/Component9";
import Component10 from "./imatgeText/Component10";
import Component11 from "./imatgeText/Component11";
import Component12 from "./imatgeText/Component12";
import Component13 from "./imatgeText/Component13";
import Component14 from "./imatgeText/Component14";

export const components = [
	{ id: 1, component: Component1, icon: VerticalSplit },
	{ id: 2, component: Component2, icon: VerticalSplit },
	{ id: 3, component: Component3, icon: VerticalSplit },
	{ id: 4, component: Component4, icon: VerticalSplit },
	{ id: 5, component: Component5, icon: VerticalSplit },
	{ id: 6, component: Component6, icon: VerticalSplit },
	{ id: 7, component: Component7, icon: VerticalSplit },
	{ id: 8, component: Component8, icon: VerticalSplit },
	{ id: 9, component: Component9, icon: VerticalSplit },
	{ id: 10, component: Component10, icon: VerticalSplit },
	{ id: 11, component: Component11, icon: VerticalSplit },
	{ id: 12, component: Component12, icon: VerticalSplit },
	{ id: 13, component: Component13, icon: VerticalSplit },
	{ id: 14, component: Component14, icon: VerticalSplit },
];

export const valor = (index, component) => {
	if (component?.component_pagina_element[index]?.element?.nom === "boto") {
		return JSON.parse(component?.component_pagina_element[index]?.valor);
	} else {
		return component?.component_pagina_element[index]?.valor;
	}
};
