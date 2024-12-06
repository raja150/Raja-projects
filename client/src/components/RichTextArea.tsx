
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { FormControl, InputLabel, TextField, FormHelperText, Box } from "@mui/material";

interface RichTextAreaProps {
  value: string;
  name: string;
  handleValueChange: (name: string, value: string) => void;
  label: string;
  placeholder?: string;
  touched?: boolean;
  error?: string;
  height?: string;
  width?: string;
}

const RichTextArea: React.FC<RichTextAreaProps> = ({
  value,
  name,
  handleValueChange,
  label,
  placeholder,
  touched,
  error,
  height = "300px",
  width = "100%",
}) => {
  const editor = useRef<any>(null);

  const config = {
    readonly: false,
    placeholder: placeholder || "Start typing...",
    height: height,
    width: width,
    enableDragAndDropFileToEditor: true,
    buttons: [
      "|", "bold", "italic", "underline",
      "|", "ul", "ol",
      "|", "font", "fontsize", "brush", "paragraph",
      "|", "cut", "copy", "paste",
      "|", "left", "center", "right", "justify",
      "|", "undo", "redo",
      "|", "hr", "eraser",
      "|", "spellcheck",
      "|","table"
    ],
    uploader: { insertImageAsBase64URI: true },
    showXPathInStatusbar: false,
    showCharsCounter: false,
    toolbarAdaptive: true,
    toolbarSticky: true,
    statusbar: false,
    useNativeTooltip: true,
  };

  const handleOnBlur = (name: string, value: string) => {
    if (value.replace(/<[^>]+>/g, "")) {
      handleValueChange(name, value);
    } else {
      handleValueChange(name, "");
    }
  };

  return (
    <FormControl fullWidth error={touched && Boolean(error)}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        onBlur={(newContent: string) => handleOnBlur(name, newContent)}
      />
      {touched && error ? <FormHelperText>{error}</FormHelperText> : null}
    </FormControl>
  );
};

export default RichTextArea;

// import React, { useState } from 'react';
// import ReactQuill from 'react-quill'; 
// import 'react-quill/dist/quill.snow.css';
// import { FormControl, InputLabel, FormHelperText } from '@mui/material';

// interface RichTextEditorProps {
//   label: string;
//   name: string;
//   value: string;
//   handleValueChange: (name: string, value: string) => void;
//   error?: string;
//   touched?: boolean;
//   placeholder?: string;
//   disabled?: boolean;
//   height?: string;
//   width?: string;
// }

// const RichTextEditor: React.FC<RichTextEditorProps> = ({
//   label,
//   name,
//   value,
//   handleValueChange,
//   error,
//   touched,
//   placeholder = "Start typing...",
//   disabled = false,
//   height = "300px",
//   width = "100%",
// }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   const handleChange = (value: string) => {
//     handleValueChange(name, value);
//   };

//   const handleBlur = () => {
//     if (!value.trim()) {
//       handleValueChange(name, '');
//     }
//   };

//   return (
//     <FormControl fullWidth error={touched && !!error} disabled={disabled}>
//       <InputLabel htmlFor={name}>{label}</InputLabel>
//       <ReactQuill
//         value={value}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         placeholder={placeholder}
//         style={{ height, width }}
//       />
//       {touched && error && <FormHelperText>{error}</FormHelperText>}
//     </FormControl>
//   );
// };

// export default RichTextEditor;

// import React, { useEffect } from 'react';
// import { useQuill } from 'react-quilljs';
// import BlotFormatter from 'quill-blot-formatter';
// import 'quill/dist/quill.snow.css';

// interface EditorProps {
//   value: string;
//   onChange: (value: string) => void;
//   placeholder?: string;
//   height?: string;
//   width?: string;
//   modules?: any;
// }

// const Editor: React.FC<EditorProps> = ({
//   value,
//   onChange,
//   placeholder = 'Type something...',
//   height = '300px',
//   width = '100%',
//   modules = {}
// }) => {
//   const { quill, quillRef, Quill } = useQuill({
//     modules: { blotFormatter: {}, ...modules }
//   });

//   // Register BlotFormatter if Quill and quill are defined
//   useEffect(() => {
//     if (Quill && !quill) {
//       Quill.register('modules/blotFormatter', BlotFormatter);
//     }
//   }, [Quill, quill]);

//   useEffect(() => {
//     if (quill) {
//       quill.root.innerHTML = value; // Set initial content if needed
//       quill.on('text-change', () => {
//         const editorContent = quill.root.innerHTML;
//         onChange(editorContent); // Trigger onChange with the updated content
//       });
//     }
//   }, [quill, value, onChange]);

//   return (
//     <div>
//       <div
//         ref={quillRef}
//         style={{ height, width }}
//         className="quill-editor"
//         data-placeholder={placeholder}
//       />
//     </div>
//   );
// };

// export default Editor;

