import { Application, Request, Response } from 'express'
import Videos from '../models/video';
import LogServer from '../Lib/LogServer';

function GetUploadedFiles(app: Application) {
    app.get('/api/GetFiles', (req: Request, res: Response) => {
        Videos.find()
            .then((result => {
                res.status(200).send({data : result, status : 200})
                LogServer("User get all files successfully", 1)
            }))
            .catch((err) => {
                res.status(400).send({msg : 'Error, cannot get files', status : 400})
                LogServer("Cannot get files from server", 2)
            })
    })
}

export default GetUploadedFiles