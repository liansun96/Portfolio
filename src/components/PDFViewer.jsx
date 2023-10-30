import React from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = () => {
  const pdfFile = '../assets/resume.pdf'; // Replace with your PDF file path

  return (
    <div>
      <Document file={pdfFile}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default PDFViewer;
