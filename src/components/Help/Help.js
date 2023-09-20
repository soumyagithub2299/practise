import React, { useState } from 'react';
import './Help.css'; // Import the CSS file
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const Help = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      ['bold', 'italic', 'underline', 'strike'],
      ['link', 'image', 'video'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link', 'image', 'video'
  ];

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div className="help-container">
      <Paper elevation={9} className="help-paper">
        <Typography variant="h4" className="help-title">
          Help Center
        </Typography>
        <ReactQuill
          theme="snow" // You can choose different themes if needed
          modules={modules}
          formats={formats}
          value={editorHtml}
          onChange={handleEditorChange}
          className="help-editor"
        />
      </Paper>



<h1>soumya</h1>



    </div>
  );
};

export default Help; <h10>soumya</h10>    h
