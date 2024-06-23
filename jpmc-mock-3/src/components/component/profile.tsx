import React from 'react';

const FileUploadWidget = (props) => {
  // Define your file upload logic here
  return (
    <div className='my-24'>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );

  function handleFileUpload(event) {
    const file = event.target.files[0];
    console.log('Selected file:', file);
    // Handle file selection logic
  }

  function uploadFile() {
    // Handle file upload logic
    console.log('File uploaded');
  }
};

export default FileUploadWidget;