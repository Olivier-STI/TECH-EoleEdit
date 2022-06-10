import {useState, useEffect} from "react"
import getUploadedVideos from "../Controllers/getUploadedVideos"
import PlayButton from '../Assets/4.png'

//Function to parse the video path to get just the video name
function getFilename(pathname : string) {
    return (pathname.split('/')[3])
}

//Function who diplay one element of the list
function DisplayOnCard(props : any) {
    return (
        <div style={{height : '10vh', width: '50vh', display: 'flex', flexDirection: 'row',
                    backgroundColor: 'black', alignItems: 'center', justifyContent: 'center',
                    margin: '1vh', borderRadius:'5px', cursor:'pointer'}} onClick={props.CardOnClick}>   
            <img alt='PlayButtonImage' style={{margin:'5%' }} src={PlayButton} height={'50px'} width={'50px'}/>
            <div style={{margin:'5%' , backgroundColor : 'white', height:'3px', width:'30px' }} />
            <div style={{display: 'flex', flexDirection: 'column', alignItems :'center', alignContent : 'center'}}>
                <text style={{color: "white", fontSize: '25px'}}>{props.Title}</text>
                <text style={{color: "white"}}>{props.Description}</text>
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

    function ConditionalDisplay(data: any) {
        if (data.length !== 0) {
            return (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    {listData.map((data) => {
                        return (
                            <DisplayOnCard Title={data.title} Description={data.description} Pathname={data.videoPath} CardOnClick={() => handleCardClick(data.videoPath)}/>
                        )
                    })}
                    
                </div>
            )
        } else {
            return (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <text style={{fontWeight:'bold', fontStyle:'italic', fontSize : '40px'}} >
                        Upload your first video.
                    </text>
                </div>
            )
        }
    }

    return (
        ConditionalDisplay(listData)
    )
}

export default VideoList