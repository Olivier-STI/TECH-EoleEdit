import { useEffect, useState } from "react"

const useVideoPlayer = (videoElement : any) => {
    //initialize all the video controls
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [muted, setMuted] = useState(false);

    //set play or pause
    const togglePlay = () => {
        setPlaying(!playing);
    }

    useEffect(() => {
        if (videoElement.current) {
            playing
            ? videoElement.current.play()
            : videoElement.current.pause();
        }
    }, [playing, videoElement]);

    const handleOnTimeUpdate = () => {
        const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
        
        setProgress(progress)
    };

    //get the video progress
    const handleVideoProgress = (event : any) => {
        const manualChange = Number(event.target.value);

        videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
        setProgress(manualChange)
    };

    //set mute or unmute
    const toggleMute = () => {
        setMuted(!muted)
    };
    
    useEffect(() => {
        if (videoElement.current) {
        setMuted(muted 
            ? (videoElement.current.muted = true)
            : (videoElement.current.muted = false))
        }
    }, [muted, videoElement]);

    return {
        togglePlay,
        handleVideoProgress,
        toggleMute,
        handleOnTimeUpdate,
        playing,
        progress,
        muted
    };

}

export default useVideoPlayer