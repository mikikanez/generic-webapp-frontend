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
			console.log("existeix");
			setError("slug", { message: "Ja existeix una pàgina amb aquesta URL" });
			return true;
		} else {
			console.log("Lliure");
			clearErrors("slug");
			return false;
		}
	}
};
