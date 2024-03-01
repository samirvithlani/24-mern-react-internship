import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { deposit } from "../redux/BankSlice";

export const HtmlToPdf = ({ htmlContent }) => {
  const pdfRef = useRef(null);
  const [isRendered, setIsRendered] = useState(false);

  const generatePDF = () => {
    const pdf = new jsPDF();
    pdf.html(pdfRef.current, {
      callback: function (pdf) {
        pdf.save("generated_pdf.pdf");
      },
      x: 10,
      y: 10,
    });
  };

  // Ensure HTML content is rendered before generating PDF
  if (!isRendered) {
    setTimeout(() => {
      setIsRendered(true);
    }, 0);
  }

  return (
    <div style={{ display: isRendered ? "block" : "none" }}>
      <div ref={pdfRef} dangerouslySetInnerHTML={{ __html: htmlContent }}>
        {/* Your HTML content to convert */}
      </div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};
