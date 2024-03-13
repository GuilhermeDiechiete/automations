import configPDF from "./config";
const fs = require('fs/promises')



async function readFileAndConvert(path: string, PDFName: string): Promise<void> {
    try {
        const textFile = await fs.readFile(path, 'utf-8');
        const pathPDF = `./storage/${PDFName}.pdf`; // Ajuste o caminho conforme necessário

        await configPDF(textFile, pathPDF);
    } catch (error) {
        console.error('Erro ao ler o arquivo:', error);
    }
}

export default readFileAndConvert