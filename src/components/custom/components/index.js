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
import Component11 from "./textBoto/Component11";
import Component12 from "./titolText/Component12";
import Component13 from "./titolText/Component13";
import Component14 from "./contacte/Component14";
import Component15 from "./contacte/Component15";
import Component16 from "./text/Component16";
import Component17 from "./text/Component17";
import Component18 from "./text/Component18";
import Component19 from "./text/Component19";
import Component20 from "./imatge/Component20";
import Component21 from "./imatge/Component21";
import Component22 from "./imatgeTitol/Component22";
import Component23 from "./carousel/Component23";
import Component24 from "./titolText/Component24";
import Component25 from "./titolText/Component25";
import Component26 from "./titolText/Component26";
import Component27 from "./imatgeText/Component27";
import Component28 from "./imatgeText/Component28";
import Component29 from "./imatgeTitol/Component29";
import Component30 from "./titolText/Component30";
import Component31 from "./titolText/Component31";
import Component32 from "./imatgeTitol/Component32";
import Component33 from "./imatgeText/Component33";
import Component34 from "./imatgeText/Component34";
import Component35 from "./imatgeText/Component35";
import Component36 from "./imatgeText/Component36";
import Component40 from "./altres/Component40";

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
	{ id: 24, component: Component24, icon: VerticalSplit },
	{ id: 25, component: Component25, icon: VerticalSplit },
	{ id: 26, component: Component26, icon: VerticalSplit },
	{ id: 27, component: Component27, icon: VerticalSplit },
	{ id: 28, component: Component28, icon: VerticalSplit },
	{ id: 29, component: Component29, icon: VerticalSplit },
	{ id: 30, component: Component30, icon: VerticalSplit },
	{ id: 31, component: Component31, icon: VerticalSplit },
	{ id: 32, component: Component32, icon: VerticalSplit },
	{ id: 33, component: Component33, icon: VerticalSplit },
	{ id: 34, component: Component34, icon: VerticalSplit },
	{ id: 35, component: Component35, icon: VerticalSplit },
	{ id: 36, component: Component36, icon: VerticalSplit },
	{ id: 40, component: Component40, icon: VerticalSplit },
];

export const valor = (index, component) => {
	return component?.component_pagina_element[index]?.valor;
};
