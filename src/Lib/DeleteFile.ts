import fs, {PathLike} from 'fs'
import LogServer from './LogServer';

function DeleteFile(PathName: PathLike) {
    fs.unlink(PathName, function (err) {
        if (err) throw err;
        LogServer('File Deleted', 1)
    })
}

export default DeleteFile