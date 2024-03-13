import { PDFDocument, StandardFonts } from 'pdf-lib';
const fs = require('fs')

async function configPDF(text: string, path: string): Promise<void> {
  
    const pdfDoc = await PDFDocument.create(); // Crie um novo documento PDF

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica); // Adicione tipo de fonte 

    const page = pdfDoc.addPage(); // Adicione uma nova página ao documento

    const { width, height } = page.getSize(); // Get the width and height of the page

    const fontSize = 15

    page.drawText(text, { 
        x: 50, 
        y: height -4 * fontSize, 
        font,
    });

  // Salve o documento PDF em um arquivo
  const pdfBytes = await pdfDoc.save();
  
  fs.writeFileSync(path, pdfBytes);

  console.log(`O arquivo PDF foi criado com sucesso em: ${path}`);
}

export default configPDF

