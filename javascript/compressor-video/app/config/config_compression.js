const { spawn } = require('child_process');
const ffmpegPath = require('ffmpeg-static');

function mp4(video, quality) {
    const parent = './videos';

    const date = new Date();
    const increment = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getMilliseconds()}`;

    const ffmpegCommand = [
        '-i', `${parent}/${video}.mp4`,
        '-codec:v', 'libx264',
        '-profile:v', 'main',
        '-preset', 'slow',
        '-b:v', '400k',
        '-codec:a', 'libmp3lame', // Alterado para o codec libmp3lame para áudio MP3
        '-b:a', '128k',
        '-maxrate', '400k',
        '-bufsize', '800k',
        '-vf', `scale=-2:${quality}`,
        '-threads', '0',
        `./conversions/mp4/${video}-${increment}-${quality}.mp4`
    ];

    // Executando o comando ffmpeg
    const ffmpegProcess = spawn(ffmpegPath, ffmpegCommand);

    // Manipulando eventos de saída do processo ffmpeg
    ffmpegProcess.stdout.on('data', (data) => {
        console.log(`Saída padrão: ${data}`);
    });

    ffmpegProcess.stderr.on('data', (data) => {
        console.error(`Erro padrão: ${data}`);
    });

    ffmpegProcess.on('close', (code) => {
        if (code === 0) {
            console.log('Conversão concluída com sucesso.');
        } else {
            console.error(`Erro durante a conversão. Verifique se contém arquivos na pasta.`);
        }
    });
}

function mp3( video ) {

    const parent = './videos'
    const date = new Date();
    const increment = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getMilliseconds()}`;

    const ffmpegCommand = [
        '-i',
        `${parent}/${video}.mp4`,
        '-vn', // indica que não queremos vídeo
        '-ar',
        '44100', // taxa de amostragem de áudio
        '-ac',
        '2', // número de canais de áudio (estéreo)
        '-b:a',
        '192k', // taxa de bits para áudio
        `./conversions/mp3/${video}-${increment}.mp3`
    ];

    // Executando o comando ffmpeg
    const ffmpegProcess = spawn(ffmpegPath, ffmpegCommand);

    // Manipulando eventos de saída do processo ffmpeg
    ffmpegProcess.stdout.on('data', (data) => {
        console.log(`Saída padrão: ${data}`);
    });

    ffmpegProcess.stderr.on('data', (data) => {
        console.error(`Erro padrão: ${data}`);
    });

    ffmpegProcess.on('close', (code) => {
        if (code === 0) {
            console.log('Conversão concluída com sucesso.');
        } else {
            console.error(`Erro durante a conversão. Verifique se contém arquivos na pasta.`);
        }
    });
}

module.exports = { mp4, mp3 }

