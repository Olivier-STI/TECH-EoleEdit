import axios from 'axios';
import {host, Port} from '../Globals/metadata'


//Request to upload the video to the server
async function UploadVideoRequest(Title : string, Description : string, File : any, callback : any) {
    var bodyFormDAta = new FormData();

    bodyFormDAta.append('video', File[0]);
    bodyFormDAta.append('Title', Title);
    bodyFormDAta.append('Description', Description);

    axios({
        url : 'http://' + host + ':' + Port + '/api/upload',
        method : 'POST',
        headers : {
            'Content-Type' : 'multipart/form-data',
        },
        data: bodyFormDAta
    }).then((res) => {
        if (res.data.status === 200) {
            callback(true)
        }
        console.log(res);
    }).catch((err) => {
        throw(err);
    })
}

export default UploadVideoRequest