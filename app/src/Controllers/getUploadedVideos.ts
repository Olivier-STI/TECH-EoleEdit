import axios from 'axios'
import { Port, host } from "../Globals/metadata"

//Request to get all video list
async function getUploadedVideos(callback : any) {
    axios.get('http://' + host + ':' + Port + '/api/GetFiles')
    .then((result) => {
        callback(result)
    })
    .catch((err) => {
        throw(err)
    })
}

export default getUploadedVideos