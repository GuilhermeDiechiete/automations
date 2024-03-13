const getName = require('./get_file_name') // module to get file names from the client directory
const compression = require('./config_compression') // video compression configuration module

async function convert(type, quality) {
    try {
        if(type === 'mp4') {

            const videos = await getName.file_names_MP4();

            if (videos.length > 0) {
                videos.forEach((video) => {
                    compression.mp4(video, quality);
                });
            } else {
                console.log('Nenhum vídeo encontrado para conversão.');
            }

        } else if(type === 'mp3') {

            const videos = await getName.file_names_MP3();

            if (videos.length > 0) {
                videos.forEach((video) => {
                    compression.mp3(video);
                });
            } else {
                console.log('Nenhum vídeo encontrado para conversão.');
            }

        } else {
            console.log('Tipo de arquivo invalido para conversão.')
        }
    } catch (error) {
        console.error('Erro ao obter nomes dos vídeos:', error);
    }
}

module.exports = { convert }