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

  try{
    const JSPlaylist= new Playlist({
      name: "Javascript",
      cType: "Front End",
      videos: 100,
      author: "xyz",
      active: true
  })

  const mongoPlaylist= new Playlist({
    name: "Mongo",
    cType: "Database",
    videos: 50,
    author: "xyz",
    active: true
  })

  const mongoosePlaylist= new Playlist({
    name: "Mongoose",
    cType: "Database",
    videos: 4,
    author: "xyz",
    active: true
  })

  const expressPlaylist= new Playlist({
    name: "Express JS",
    cType: "Back End",
    videos: 40,
    author: "xyz",
    active: true
  })

  const res = await Playlist.insertMany([JSPlaylist,mongoPlaylist,mongoosePlaylist,expressPlaylist]);
  console.log(res);
}
  catch(error){
    console.log(error);
  }
}

//createDoc();

const getDoc = async ()=>{
   const result = await Playlist.find({cType:"Front End"}).select({name:1, _id:0});
   console.log(result);
}

getDoc();

