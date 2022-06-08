import {Application, Request, Response} from 'express'
import multer from 'multer';
import CompressVideo from '../Lib/CompressVideo';
import Videos from '../models/video';
import LogServer from '../Lib/LogServer';
import { Port, host } from '../globals/metadata';

//Set videos destinations
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {                                                                       
        cb(null, './videos')
    },
    filename: (req, file, cb) => { 
        cb(null, file.originalname)
    }
})

//Set the filter I want
const upload = multer({
    storage: fileStorage, fileFilter: (req, file, cb) => {                                                   
        if (file.mimetype === 'video/quicktime' /*.MOV*/ || file.mimetype === 'video/x-msvideo' /*.AVI*/
            || file.mimetype === 'video/mp4' || file.mimetype === 'video/x-flv' /*.flv*/) {
                cb(null, true)
            } else {
                return cb(null, false);
            }
        }
});

//Upload function to store in th server and db
function Upload(app: Application) {
    app.post('/api/upload', upload.single("video"), (req: Request, res: Response) => {
        const { Title, Description } = req.body

        if (!req.file) {
            res.status(400).send({ msg: 'Cannot set the file, only accept .mov, .avi, .mp4, .flv', status: 400 })
            LogServer('User want to upload a bad file', 2)
        }
        else if (req.file) {
            CompressVideo(req.file.originalname, (result : Boolean) => {
                if (result === true) {
                    const videos = new Videos({
                        title: Title,
                        description: Description,
                        videoPath : "http://" + host + ':' + Port + "/Compressed-" + req.file?.originalname
                    })
                    videos.save()
                        .then((result: any) => {
                            res.status(200).send({ msg: 'File uploaded successfully.', data: result, status: 200 })
                            LogServer('User upload file successfully', 1)
                        })
                        .catch((err: any) => {
                            console.log(err)
                        });
                }
                else {
                    res.status(200).send({ msg: 'Cannot compress the video.', status: 400 })
                    LogServer('Error, cannot compress the video', 2)
                }
            })
        }
    });
}

export default Upload;