import VideoList from "./VideosList"
import ListImage from '../Assets/3.png'

const DisplayVideoList = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            <div style={{height : '50%', width :'50%'}}>
                <VideoList/>
            </div>
            <div style={{height : '50%', width :'45%'}}>
                <img src={ListImage} height={'90%'} width ={'90%'} alt='ListImage'/>
            </div>
        </div>
    )
}

export default DisplayVideoList