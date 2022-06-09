import '../App.css'
import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import useVideoPlayer from './useVideoPlayer';

const VideoPlayer = () => {
    const videoElement = useRef(null);
    const { togglePlay, handleOnTimeUpdate, handleVideoProgress, toggleMute, playing, progress, muted } = useVideoPlayer(videoElement);

    return (
        <div className="container">
          <div className="video-wrapper">
            <video height={"800"} width={"800"} src={"http://127.0.0.1:5000/Compressed-IMG-0583.mp4"} ref={videoElement}  onTimeUpdate={handleOnTimeUpdate}/>
            <div className="controls">
              <div className="actions">
                <button style={{border : 'none', backgroundColor : 'transparent'}} onClick={togglePlay}>
                  {!playing ? (
                    <Icon icon="bx:play" color={"black"} font-size={"30px"}/>
                  ) : (
                    <Icon icon="bx:pause" color={"black"} font-size={"30px"}/>
                  )}
                </button>
              </div>
              <input style={{border: 'none', width: '400px', height: '60px',}} type="range"  min="0" max="100" value={progress} onChange={(e) => handleVideoProgress(e)} />
              <button style={{border : 'none', backgroundColor : 'transparent'}}  onClick={toggleMute}>
                {!muted ? (
                  <Icon icon="bxs-volume-full" color={"black"} font-size={"30px"}/>
                ) : (
                  <Icon icon="bxs-volume-mute" color={"black"} font-size={"30px"}/>
                )}
              </button>
            </div>
          </div>
        </div>
      );

}

export default VideoPlayer
