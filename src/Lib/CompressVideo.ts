import DeleteFile from "./DeleteFile";
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegPath);

interface VideoSate {
    (state: Boolean): void;
}

function CompressVideo(videoPath: string, callback : VideoSate) {
    ffmpeg('./videos/' + videoPath)
        .output('./videos/' + Date.now() + '-' + videoPath)
        .videoCodec('libx264')
        .audioCodec('aac')
        .on('error', function(err: any) {
                console.log('An error occurred: ' + err.message);
                callback(false)
            })
        .on('progress', function(progress : any) {
                console.log('Compressing ...');
                
            })
        .on('end', function() {
            console.log('Finished processing');
            DeleteFile('./videos/' + videoPath)   
            callback(true)
        })
        .run();
}

export default CompressVideo