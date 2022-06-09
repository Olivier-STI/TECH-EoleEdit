import mongoose from "mongoose"
//const dbURI = "mongodb+srv://<username>:<password>@reactapp.3vhou.mongodb.net/<dbname>?retryWrites=true&w=majority"

function ConnectToDB() {
    //connect to mongoDb
    const dbURI : string = "SECRET"

    mongoose.connect(dbURI)
        .then(result => { console.log("Connected to the db") })
        .catch(err => {console.log(err)})
}

export default ConnectToDB