import {Application, Request, Response} from 'express'
import multer from 'multer';
import CompressVideo from '../Lib/CompressVideo';


function Upload(app: Application) {
    const fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './videos')
        },
        filename: (req, file, cb) => { 
            cb(null, file.originalname)
        }
    })
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
        
        app.post('/upload', upload.single("image"), (req: Request, res: Response) => {
            if (!req.file) {
                res.status(400).send({ msg : 'Cannot set the file, only accept .mov, .avi, .mp4, .flv', status : 400})
            } 
            else if (req.file) {
                CompressVideo(req.file.originalname, (result : Boolean) => {
                    if (result === true)
                        res.status(200).send({ msg: 'File uploaded successfully.', status: 200 })
                    else {
                        res.status(200).send({ msg: 'Cannot compresse the video.', status: 400 })
                    }
                })
            }
    });
}

export default Upload;