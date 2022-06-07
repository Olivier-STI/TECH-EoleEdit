import express, {Application, Request, Response} from 'express'
import Upload from './Routes/UploadFile';

const app: Application = express();
const PORT : Number = 5000;

Upload(app);        // Upload Request


app.listen(PORT, () => console.log('Server listen on ' + PORT))