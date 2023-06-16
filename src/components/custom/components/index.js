import Component1 from "./imatgeText/Component1";
import Component2 from "./imatgeText/Component2";
import Component3 from "./imatgeText/Component3";
import Component4 from "./imatgeText/Component4";
import Component5 from "./imatgeText/Component5";

export const components = [
	{ id: 1, component: Component1 },
	{ id: 2, component: Component2 },
	{ id: 3, component: Component3 },
	{ id: 4, component: Component5 },
];

export const valor = (index, component) => {
	return component?.component_pagina_element[index]?.valor;
};
