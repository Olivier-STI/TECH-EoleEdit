import FormImage from '../Assets/2.png'
import { UploadForm } from './UploadForm'

const DisplayForm = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
            <div style={{height : '40%', width :'40%'}}>
                <img alt='FormImage' src={FormImage} height={'90%'} width ={'90%'}/>
            </div>
            <UploadForm/>
        </div>
    )
}

export default DisplayForm