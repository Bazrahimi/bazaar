// importing React Default export
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
// importing the CSS styles for 'reactQuill' it provide a specific them for the editor.
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify'

// Definging a function component which take 'onchange' as a prop.
const QuillEditor = ({ onChange }) => {
  // Defining a state variable 'content' and setContent initializing with empty strring.
  const [content, setContent] = useState('');
  // Defining a function to handle changes in the content of the editor.
  const handleContentChange = (newContent) => {
    const sanitizedContent = DOMPurify.sanitize(newContent);
    //updating the 'content' state with the new content.
    setContent(sanitizedContent);
    // calling the 'onchange' prop with a new content, to notofy parent component of the change.
    onChange(sanitizedContent);
  };
  // Defining a function to handle paste event in the editor
  const handlePaste = (e) => {
    // preventiing the default paste behaviour
    e.preventDefault();
    // retrieving the pasted data as text
    const pastedData = e.clipboardData.getData('text');

    //  Modigying the pasted content. the function 'modifyconet' is asume to to be define.
    const modifiedData = modifyContent(pastedData);
    
    // Insert the modified content
    const quill = e.currentTarget.getEditor();
    const range = quill.getSelection();
    quill.insertText(range.index, modifiedData);
  };

  const modifyContent = (data) => {
    // Modify the data as needed.
    // For example, here, I'm simply converting all text to uppercase
    return data.toUpperCase();
  };

  return (
    <ReactQuill 
      value={content} 
      onChange={handleContentChange} 
      onPaste={handlePaste}
    />
  );
};

export default QuillEditor;
