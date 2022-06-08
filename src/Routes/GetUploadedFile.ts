import { Application, Request, Response } from 'express'

function GetUploadedFiles(app: Application) {
    app.get('/api/GetFiles', (req: Request, res: Response) => {
        res.send('Hello world')
    })
}

export default GetUploadedFiles