function constructFormPagina(values) {
	const data = new FormData();

	data.append("nom", values.nom);
	data.append("titol", values.titol);
	data.append("titol_es", values.titol_es ?? "");
	data.append("titol_en", values.titol_en ?? "");
	data.append("titol_fr", values.titol_fr ?? "");
	data.append("descripcio", values.descripcio);
	data.append("descripcio_es", values.descripcio_es ?? "");
	data.append("descripcio_en", values.descripcio_en ?? "");
	data.append("descripcio_fr", values.descripcio_fr ?? "");
	data.append("aplicacions", values.aplicacions);
	data.append("aplicacions_es", values.aplicacions_es ?? "");
	data.append("aplicacions_en", values.aplicacions_en ?? "");
	data.append("aplicacions_fr", values.aplicacions_fr ?? "");
	data.append("opcions", values.opcions);
	data.append("opcions_es", values.opcions_es ?? "");
	data.append("opcions_es", values.opcions_es ?? "");
	data.append("opcions_es", values.opcions_es ?? "");
	data.append("categoria_id", values.categoria_id);
	data.append("video", values.video ?? "");
	data.append("sectors", JSON.stringify(values.sectorsList));
	data.append("aplicacionsList", JSON.stringify(values.aplicacionsList));
	data.append("caracteristiques", JSON.stringify(values.caracteristiques));

	values.markers.map((item, index) => {
		data.append(`markers[${index}][top]`, item?.top);
		data.append(`markers[${index}][left]`, item?.left);
		data.append(`markers[${index}][itemNumber]`, item?.itemNumber);
		data.append(`markers[${index}][nom]`, item?.nom);
		data.append(`markers[${index}][desc]`, item?.desc);
		data.append(`markers[${index}][foto]`, item?.foto);
		if (item.fotoPunt?.[0]?.name) {
			data.append(`markers[${index}][fotoPunt]`, item.fotoPunt[0], item.fotoPunt[0].name);
		}
	});

	if (values.foto?.[0]?.name) {
		data.append("foto", values.foto[0], values.foto[0].name);
	}

	if (values.cataleg?.[0]?.name) {
		data.append("cataleg", values.cataleg[0], values.cataleg[0].name);
	}

	if (values.galeria) {
		for (const file of values.galeria) {
			data.append("galeria[]", file);
		}
	}
	return data;
}
