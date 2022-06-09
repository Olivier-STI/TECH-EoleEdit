import express, {Application, Request, Response} from 'express'
import {Port}  from './globals/metadata';
import Upload from './Routes/UploadFile';
import GetUploadedFiles from './Routes/GetUploadedFile';
import ConnectToDB from './database/Config';
import Cors from 'cors';
const app: Application = express();
const PORT : Number = Port;

//Conect server to the db
ConnectToDB()

// Set video folder public
app.use(express.static('videos'))

// Set cors middleware
app.use(Cors());

// Upload Request
Upload(app);

 // Get Uploaded file request 
GetUploadedFiles(app)


app.listen(PORT, () => console.log('Server listen on ' + PORT))