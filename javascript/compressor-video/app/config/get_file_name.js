const fs = require('fs');

async function file_names_MP4() {

    try {
        const files = fs.readdirSync('./videos')
        const fileNames = files.map(file => {
            return file.replace(/\.[^/.]+$/, '')
        })
        return fileNames

    } catch (err) {
        console.error('Erro ao obter os nomes dos arquivos', err)
        return []
    }
}

async function file_names_MP3() {
    try {
        const files = fs.readdirSync('./videos')
        const fileNames = files.map(file => {
            return file.replace(/\.[^/.]+$/, '')
        })
        return fileNames

    } catch (err) {
        console.error('Erro ao obter os nomes dos arquivos', err)
        return []
    }
}

module.exports = { file_names_MP3, file_names_MP4 }




