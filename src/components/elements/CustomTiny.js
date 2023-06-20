import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function CustomTiny(props) {
  const editorRef = useRef(null);
  const onChange = () => {
    props.register(editorRef.current.getContent());
    console.log(editorRef.current.getContent());
  };
  return (
    <>
      <Editor
        apiKey='qeadn68y0w1p8m8z7fahdl0o7xlac603a1cm049n85yd1gkb'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={props.defaultValue}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | link |' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Quicksand,Arial,sans-serif; font-size:14px }'
        }}
        onChange={onChange}
      />
    </>
  );
}