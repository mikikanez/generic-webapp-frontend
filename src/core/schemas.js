import * as yup from "yup";

export const schemaCheckout = yup.object({
	nom: yup.string().required("El nombre es obligatorio"),
	cognom1: yup.string().required("El apellido es obligatorio"),
	cognom2: yup.string().required("El apellido es obligatorio"),
	telefon: yup.string().required("El teléfono es obligatorio"),
	email: yup.string().email("No es un E-mail válido").required("Les data d'inici és obligatòria"),
	direccio_enviament: yup.string().required("La dirección es obligatoria"),
	poblacio_enviament: yup.string().required("La población es obligatoria"),
	provincia_enviament: yup.string().required("La província es obligatoria"),
	codi_postal_enviament: yup.string().required("El código postal es obligatorio"),
	pais_enviament: yup.string().required("El país es obligatorio"),
	direccio: yup.string().when("factura", {
		is: "true",
		then: yup.string().required("La dirección es obligatoria"),
	}),
});
