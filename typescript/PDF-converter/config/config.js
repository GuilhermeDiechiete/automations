"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pdf_lib_1 = require("pdf-lib");
const fs = require('fs');
function configPDF(text, path) {
    return __awaiter(this, void 0, void 0, function* () {
        const pdfDoc = yield pdf_lib_1.PDFDocument.create(); // Crie um novo documento PDF
        const font = yield pdfDoc.embedFont(pdf_lib_1.StandardFonts.Helvetica); // Adicione tipo de fonte 
        const page = pdfDoc.addPage(); // Adicione uma nova página ao documento
        const { width, height } = page.getSize(); // Get the width and height of the page
        const fontSize = 15;
        page.drawText(text, {
            x: 50,
            y: height - 4 * fontSize,
            font,
        });
        // Salve o documento PDF em um arquivo
        const pdfBytes = yield pdfDoc.save();
        fs.writeFileSync(path, pdfBytes);
        console.log(`O arquivo PDF foi criado com sucesso em: ${path}`);
    });
}
exports.default = configPDF;
