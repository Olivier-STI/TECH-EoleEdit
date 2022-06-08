import DeleteFile from "./DeleteFile";
import LogServer from "./LogServer";
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegPath);

interface IVideoSate {
    (state: Boolean): void;
}

//Compress the file to get a low-res versions
function CompressVideo(videoPath: string, callback : IVideoSate) {
    LogServer('Start compressing', 1)
    ffmpeg('./videos/' + videoPath)
        .output('./videos/' + 'Compressed-' + videoPath)
        .videoCodec('libx264')
        .audioCodec('aac')
        .on('error', function(err: any) {
            LogServer(err.message, 2)
            callback(false)
        })
        .on('progress', function(progress : any) {
            LogServer('Compressing', 1)
        })
        .on('end', function() {
            LogServer('Finished processing', 1);
            DeleteFile('./videos/' + videoPath)   
            callback(true)
        })
        .run();
}

export default CompressVideo