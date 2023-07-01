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
import Component37 from "./video/Component37";
import Component38 from "./galeria/Component38";
import Component40 from "./altres/Component40";
import Component23 from "./galeria/Component23";
import Component39 from "./imatgeText/Component39";
import Component41 from "./boto/Component41";
import Component42 from "./imatgeText/Component42";
import Component43 from "./galeria/Component43";
import Component44 from "./imatgeText/Component44";
import Component45 from "./imatgeText/Component45";
import Component46 from "./imatgeText/Component46";
import Component47 from "./imatgeTitol/Component47";

export const components = [
	{ id: 1, component: Component1 },
	{ id: 2, component: Component2 },
	{ id: 3, component: Component3 },
	{ id: 4, component: Component4 },
	{ id: 5, component: Component5 },
	{ id: 6, component: Component6 },
	{ id: 7, component: Component7 },
	{ id: 8, component: Component8 },
	{ id: 9, component: Component9 },
	{ id: 10, component: Component10 },
	{ id: 11, component: Component11 },
	{ id: 12, component: Component12 },
	{ id: 13, component: Component13 },
	{ id: 14, component: Component14 },
	{ id: 15, component: Component15 },
	{ id: 16, component: Component16 },
	{ id: 17, component: Component17 },
	{ id: 18, component: Component18 },
	{ id: 19, component: Component19 },
	{ id: 20, component: Component20 },
	{ id: 21, component: Component21 },
	{ id: 22, component: Component22 },
	{ id: 23, component: Component23 },
	{ id: 24, component: Component24 },
	{ id: 25, component: Component25 },
	{ id: 26, component: Component26 },
	{ id: 27, component: Component27 },
	{ id: 28, component: Component28 },
	{ id: 29, component: Component29 },
	{ id: 30, component: Component30 },
	{ id: 31, component: Component31 },
	{ id: 32, component: Component32 },
	{ id: 33, component: Component33 },
	{ id: 34, component: Component34 },
	{ id: 35, component: Component35 },
	{ id: 36, component: Component36 },
	{ id: 37, component: Component37 },
	{ id: 38, component: Component38 },
	{ id: 39, component: Component39 },
	{ id: 40, component: Component40 },
	{ id: 41, component: Component41 },
	{ id: 42, component: Component42 },
	{ id: 43, component: Component43 },
	{ id: 44, component: Component44 },
	{ id: 45, component: Component45 },
	{ id: 46, component: Component46 },
	{ id: 47, component: Component47 },
];

export const valor = (index, component) => {
	return component?.component_pagina_element[index]?.valor;
};
