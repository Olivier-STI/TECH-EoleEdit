import React, {useState, useEffect} from "react"
import getUploadedVideos from "../Controllers/getUploadedVideos"


//Function to parse the video path to get just the video name
function getFilename(pathname : string) {
    return (pathname.split('/')[3])
}

//Function who diplay one element of the list
function DisplayOnCard(props : any) {
    return (
        <div style={{height : '10vh', width: '50vh', display: 'flex', flexDirection: 'row',
                    backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center',
                    margin: '1vh'}}>
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
const VideoList = () => {
    const  [listData, setlistData] = useState<any[]>([]);

    useEffect(() => {
        let mounted = true
        getUploadedVideos((result : any) => {
            if (mounted) {
                if (result.data.status === 200) {
                    setlistData(result.data.data)
                }
            }
        })
        return () => {
            mounted = false
        }
    }, []);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            {listData.map((data) => {
                return (
                    <DisplayOnCard Title={data.title} Description={data.description} Pathname={data.videoPath}/>
                )
            })}
        </div>
    )
}

export default VideoList