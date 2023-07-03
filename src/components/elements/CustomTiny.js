import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Box, Typography } from "@mui/material";
import { useOpcions } from "@/context/OpcionsContext";
import { useTheme } from "@emotion/react";

export default function CustomTiny({ register, name, setValue, label, getValues, height, watch }) {
	const editorRef = useRef(null);
	const opcions = useOpcions();
	const theme = useTheme();

	return (
		<Box mt={3}>
			<Typography mb={1}>{label}</Typography>
			<Editor
				onInit={(evt, editor) => (editorRef.current = editor)}
				value={watch(name)}
				onEditorChange={(value) => setValue(name, value)}
				apiKey="n666mo3r53ns2f0ichoygzukc1u3zs46sdrgsg8ud02n2g4c"
				init={{
					height: height,
					menubar: false,
					plugins: [
						"searchreplace visualblocks code fullscreen",
						"insertdatetime media table paste code help wordcount",
						"image",
						"link",
						"table",
						"lists",
					],
					toolbar:
						"undo redo | formatselect | blocks | " +
						"bold italic forecolor | alignleft aligncenter " +
						"alignright alignjustify | bullist numlist outdent indent | " +
						"image link table",
					content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
					block_formats: "Paragraph=p; Header 2=h2; Header 3=h3; Header 4=h4; Header 5=h5",

					color_map: [
						opcions?.primary,
						"Primari",
						opcions?.secondary,
						"Secundari",
						opcions?.details,
						"Detalls",
						opcions?.background,
						"Fons",
						opcions?.background_dark,
						"Fons fosc",
						"000000",
						"Negre",
					],
					formats: {
						// Changes the default format for h1 to have a class of heading
						h2: { block: "h2", styles: { fontSize: theme.typography.h2.fontSize } },
					},
				}}
			/>
			<input {...register(name)} hidden />
		</Box>
	);
}
