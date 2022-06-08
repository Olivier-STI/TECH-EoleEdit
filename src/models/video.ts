import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface IVideo {
    title : string,
    description : string,
    videoPath : string
}

const VideoSchema = new Schema<IVideo>({
    title: { 
        type: String 
    },
    description: { 
        type: String 
    },
    videoPath : { 
        type: String 
    }
    
}, { timestamps: true })

const Videos = mongoose.model('Videos', VideoSchema);

export default Videos;