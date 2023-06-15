import Component1 from "./imatgeText/Component1";
import Component2 from "./imatgeText/Component2";

export const components = [
	{ id: 1, component: Component1 },
	{ id: 2, component: Component2 },
	{ id: 3, component: Component1 },
];

export const valor = (index, component) => {
	return component?.component_pagina_element[index]?.valor;
};
