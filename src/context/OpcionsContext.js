import { createContext, useContext } from "react";

export const Opcions = createContext({
	opcions: "Hola",
});

export function useOpcions() {
	const context = useContext(Opcions);

	if (!context) {
		console.log("Error deploying App Context!!!");
	}

	return context;
}
