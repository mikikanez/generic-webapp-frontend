import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Box, Typography } from "@mui/material";

export default function CustomTiny({ register, name, setValue, label, getValues, height, watch }) {
	const editorRef = useRef(null);

	console.log(name);

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
						"undo redo | formatselect | " +
						"bold italic backcolor | alignleft aligncenter " +
						"alignright alignjustify | bullist numlist outdent indent | " +
						"image link table",
					content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
				}}
			/>
			<input {...register(name)} hidden />
		</Box>
	);
}
