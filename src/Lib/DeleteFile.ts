import fs, {PathLike} from 'fs'

function DeleteFile(PathName: PathLike) {
    fs.unlink(PathName, function (err) {
        if (err) throw err;
        console.log('File Deleted')
    })
}

export default DeleteFile