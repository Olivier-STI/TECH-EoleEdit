import VideoPlayer from './Components/videoPlayer';
import TopBar from './Components/TopBar';
import DisplayText from './Components/DisplayText';
import DisplayForm from './Components/DisplayForm';
import DisplayVideoList from './Components/DisplayVideoList';

const App = () => {
    return (
      <div>
        <TopBar/>
        <div style={{marginLeft:'1%'}}>
          <DisplayText TextSize={'35px'} Text={'Step 1 : Upload a video'} />
          <DisplayForm/>          {/* The upload form - Class component  */}
          <DisplayText TextSize={'35px'} Text={'Step 2 : Choose the video you want to see'} />
          <DisplayVideoList/>     {/* The list of video - React component  */}
          <DisplayText TextSize={'35px'} Text={'Step 3 : Enjoy your video'} />
          <VideoPlayer/>          {/* The video player - React component  */}
        </div>
      </div>
    );
}
export default App;
