const mongoose = require('mongoose');


const MONGO_URI="mongodb://127.0.0.1:27017/MongoDbPractice";

//connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true
}).then(()=> console.log("connection successful")).catch((error)=>{
  console.log(error);
})

//creating schema
const playlistSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  cType: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now
  }
})

//model
//collection creation
const Playlist = new mongoose.model("Playlist",playlistSchema);

//inserting data or creating a document
const createDoc = async ()=>{

  try{const reactPlayList= new Playlist({
    name: "Node JS",
    cType: "Back End",
    videos: 150,
    author: "xyz",
    active: true,
  })

  const res = await reactPlayList.save();
  console.log(res);
}
  catch(error){
    console.log(error);
  }
}

createDoc();

