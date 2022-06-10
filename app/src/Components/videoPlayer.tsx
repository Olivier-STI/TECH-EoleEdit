import '../App.css'
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import useVideoPlayer from '../Hooks/useVideoPlayer';
import { Port, host } from '../Globals/metadata';

const VideoPlayer = (props : any) => {
    const videoElement = useRef(null);
    const [videoLink, setVideoLink] = useState('')
    const { togglePlay, handleOnTimeUpdate, handleVideoProgress, toggleMute, playing, progress, muted } = useVideoPlayer(videoElement);
    
    useEffect(() => {
      //Get data from the url
      let params = new URLSearchParams(window.location.search);
      let VideoName = params.get("video");
      if (VideoName != null)
        setVideoLink('http://' + host + ':' + Port + '/' + VideoName)
    }, [])
    
    //Check if user already choose a video
    if (videoLink) {
        return (
          <div className="container">
            <div className="video-wrapper">
              <video ref={videoElement}  onTimeUpdate={handleOnTimeUpdate}>
                <source src={videoLink} />
              </video>
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
        )
      }
      // user dosn't choose video 
      else {
        return(
          <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '500px'}}>
            <text style={{fontWeight:'bold', fontStyle:'italic', fontSize : '40px'}} >
                Please, choose a video to see.
            </text>

          </div>
        )
      }
    
} 
    

export default VideoPlayer
