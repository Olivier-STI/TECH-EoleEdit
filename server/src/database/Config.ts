import mongoose from "mongoose"

function ConnectToDB() {
    //connect to mongoDb
    const Username : string = "SECRET";
    const Password : string = "SECRET";
    const DbName : string = 'SECRET';
    const dbURI : string = "mongodb+srv://" + Username + ":" + Password + "@reactapp.3vhou.mongodb.net/" + DbName + "?retryWrites=true&w=majority"


    mongoose.connect(dbURI)
        .then(result => { console.log("Connected to the db") })
        .catch(err => {console.log(err)})
}

export default ConnectToDB