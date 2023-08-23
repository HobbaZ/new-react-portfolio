import React from "react";
import { Document, Page } from "react-pdf";
import resumeFile from "../files/ZACHARY_HOBBA_TECH_RESUME.pdf";

export default function Resume() {
  return (
    <div className="resumeContainer">
      <Document file={resumeFile}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
