"use client";
import React, { useState } from "react";
// import "./styles.css"; // Import the CSS file

const pdfData = {
  BSc: {
    sem1: "/pdfs/pdf1.pdf",
    sem2: "/pdfs/pdf2.pdf",
    sem3: "/pdfs/pdf1.pdf",
    sem4: "/pdfs/pdf2.pdf",
    sem5: "/pdfs/pdf2.pdf",
    sem6: "/pdfs/pdf2.pdf",
  },
  BCom: {
     sem1: "/pdfs/pdf1.pdf",
    sem2: "/pdfs/pdf2.pdf",
    sem3: "/pdfs/pdf1.pdf",
    sem4: "/pdfs/pdf2.pdf",
    sem5: "/pdfs/pdf2.pdf",
    sem6: "/pdfs/pdf2.pdf",
  },
  BBA: {
    sem1: "/pdfs/pdf1.pdf",
    sem2: "/pdfs/pdf2.pdf",
    sem3: "/pdfs/pdf1.pdf",
    sem4: "/pdfs/pdf2.pdf",
    sem5: "/pdfs/pdf2.pdf",
    sem6: "/pdfs/pdf2.pdf",
  },
  BCA: {
      sem1: "/pdfs/pdf1.pdf",
      sem2: "/pdfs/pdf2.pdf",
      sem3: "/pdfs/pdf1.pdf",
      sem4: "/pdfs/pdf2.pdf",
      sem5: "/pdfs/pdf2.pdf",
      sem6: "/pdfs/pdf2.pdf",
  }
};

const Page = () => {
  const [selectedDegree, setSelectedDegree] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);

  return (
    <div className="container">
      {/* Navbar Section */}
      <div id="CourseNotes">
        <h1 className="title">Course Notes</h1>

        {/* Selection Bar */}
        <div id="SelectionBar">
          {Object.keys(pdfData).map((degree) => (
            <div
              key={degree}
              className={`degree ${selectedDegree === degree ? "selected" : ""}`}
              onClick={() => setSelectedDegree(degree)}
            >
              {degree}
            </div>
          ))}
        </div>

        {/* Semester Selection */}
        {selectedDegree && (
          <div id="semSelect">
            {Object.keys(pdfData[selectedDegree]).map((sem) => (
              <div
                key={sem}
                className={`sem ${selectedSemester === sem ? "selected" : ""}`}
                onClick={() => setSelectedSemester(sem)}
              >
                {sem.replace("sem", "Semester ")}
              </div>
            ))}
          </div>
        )}

        {/* PDF Selection Box - Below Sem Bar, Left Aligned */}
        {selectedDegree && selectedSemester && (
          <div className="pdfSelectionBox">
            <h2>Available PDFs for {selectedDegree} - {selectedSemester.replace("sem", "Semester ")}</h2>
            <ul>
              <li>
                <a id="downloadBtn" href={pdfData[selectedDegree][selectedSemester]} target="_blank" rel="noopener noreferrer">
                  <span> Math--Open PDF</span>
                  <img src="./images/download.png" alt="" />
                </a>
              </li>
              <li>
                <a id="downloadBtn" href={pdfData[selectedDegree][selectedSemester]} target="_blank" rel="noopener noreferrer">
                  <span> Physics--Open PDF</span>
                  <img src="./images/download.png" alt="" />                 
                </a>
              </li>
            </ul>
          </div>



          
        )}
      </div>
    </div>
  );
};

export default Page;