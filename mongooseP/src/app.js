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

/*inserting data or creating a document
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
}*/

/*gets the name field only where cType is Front End

const getDoc = async ()=>{
   const result = await Playlist
   .find({cType:"Front End"})
   .select({name:1, _id:0});
   console.log(result);
}
*/

/* get the videos where videos are more than 50 

const getDoc = async()=>{
  const result = await Playlist
  .find({videos:{$gt:50}}
    )
    console.log(result);
}*/

/* return if backend  and database present aas cType field

const getDoc = async ()=>{
  const result = await Playlist
  .find({cType: { $in : ["Back End","Database"]}})
  console.log(result);
}*/

/*logical queries

const getDoc = async ()=>{
  const result = await Playlist
  .find({ $and : [{cType:"Back End"},
{author:"xyz"}]})
  console.log(result);
}*/

/*gets the count of all the record with author xyz

const getDoc = async ()=>{
  try{const result = await Playlist
    .find({author:"xyz"})
   .countDocuments();
    console.log(result);
  }catch(error){console.log(error);}}*/
  
//   const getDoc = async ()=>{
//     try{
//       const result = await Playlist
//       .find({author:"xyz"})
//       .select({name:1,_id:0})
//      .sort({name:-1});
//       console.log(result);
//     }catch(error){console.log(error);}}

//  getDoc();


//delete the document

const deleteDoc = async (_id)=>{
  try{ const result = await Playlist
    .deleteOne({_id});
  console.log(result);}catch(error){console.log(error);}
 

}

deleteDoc("647ca67cfff367a85be5e32a");
