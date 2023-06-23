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
import Component12 from "./titolText/Component1";
import Component13 from "./titolText/Component2";
import Component14 from "./contacte/Component1";
import Component15 from "./contacte/Component2";
import Component16 from "./text/Component1";
import Component17 from "./text/Component2";
import Component18 from "./text/Component3";
import Component19 from "./text/Component4";
import Component20 from "./imatge/Component1";
import Component21 from "./imatge/Component2";
import Component22 from "./imatgeTitol/Component1";
import Component23 from "./imatge/Component23";

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
	{ id: 15, component: Component15, icon: VerticalSplit },
	{ id: 16, component: Component16, icon: VerticalSplit },
	{ id: 17, component: Component17, icon: VerticalSplit },
	{ id: 18, component: Component18, icon: VerticalSplit },
	{ id: 19, component: Component19, icon: VerticalSplit },
	{ id: 20, component: Component20, icon: VerticalSplit },
	{ id: 21, component: Component21, icon: VerticalSplit },
	{ id: 22, component: Component22, icon: VerticalSplit },
	{ id: 23, component: Component23, icon: VerticalSplit },
];

export const valor = (index, component) => {
	if (component?.component_pagina_element[index]?.element?.nom === "boto") {
		return JSON.parse(component?.component_pagina_element[index]?.valor);
	} else {
		return component?.component_pagina_element[index]?.valor;
	}
};
