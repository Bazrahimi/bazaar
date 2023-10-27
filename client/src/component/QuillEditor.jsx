import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = ({ onChange }) => {
  const [content, setContent] = useState('');

  const handleContentChange = (newContent) => {
    setContent(newContent);
    onChange(newContent);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');

    // Modify the pasted content here as needed
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
