import React, {useState, useEffect} from "react"
import getUploadedVideos from "../Controllers/getUploadedVideos"
import VideoPlayer from "./videoPlayer"

//Function to parse the video path to get just the video name
function getFilename(pathname : string) {
    return (pathname.split('/')[3])
}

//Function who diplay one element of the list
function DisplayOnCard(props : any) {
    return (
        <div style={{height : '10vh', width: '50vh', display: 'flex', flexDirection: 'row',
                    backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center',
                    margin: '1vh'}} onClick={props.CardOnClick}>
            <div style={{margin : '1vh'}}>
                <text>{props.Title}</text>
            </div>
            <div style={{margin : '1vh'}}>
                <text>{props.Description}</text>
            </div>
            <div style={{margin : '1vh'}}>
                <text>{getFilename(props.Pathname)}</text>
            </div>
        </div>
    )
}

//fucntion how display all the video list
const VideoList = (props : any) => {
    const  [listData, setlistData] = useState<any[]>([]);

    useEffect(() => {
        getUploadedVideos((result : any) => {
            if (result.data.status === 200) {
                setlistData(result.data.data)
            }
        })
    }, []);

    //function to choose the video user want play
    function handleCardClick(videoPath : string) {
        const urlParams = new URLSearchParams(window.location.search);

        //Add video name to the url
        urlParams.set('video', getFilename(videoPath));
        window.location.search = urlParams.toString();
    }

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                {listData.map((data) => {
                    return (
                        <DisplayOnCard Title={data.title} Description={data.description} Pathname={data.videoPath} CardOnClick={() => handleCardClick(data.videoPath)}/>
                    )
                })}
            </div>
        </div>
    )
    
}

export default VideoList