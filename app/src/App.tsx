import  { Component } from 'react';
import { UploadForm } from './Components/UploadForm';
import VideoList from './Components/VideosList';
import VideoPlayer from './Components/videoPlayer';

export class App extends Component {
  constructor(props : any) {
    super(props)
  }


  render () {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <UploadForm/>                 {/* The upload form - Class component */}
        <VideoList />                 {/* The list of video - React component */}
        <VideoPlayer/>                {/* The video player - React component */}
      </div>
    );
  }
}

export default App;
