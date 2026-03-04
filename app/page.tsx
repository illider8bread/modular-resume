'use client'

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import PDFContainer from "../public/components/PDFContainer.jsx"
import { useEffect } from "react";
export default function Home() {

  async function PDFContainer() {
      const pdfDoc = await PDFDocument.create();
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  
      const page = pdfDoc.addPage();
      const {width, height} = page.getSize();
      const fontSize = 30;
      page.drawText("This is a test", {
          x:50,
          y: height - 4 * fontSize,
          size: fontSize,
          font: timesRomanFont,
          color: rgb(0,0.53, 0.71),
      })
      const pdfBytes = await pdfDoc.save()
  }

  useEffect(()=>{
    PDFContainer();
  },[])
  return (
    <>
      
    </>
  );
}
