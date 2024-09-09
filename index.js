const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
//  .then(()=>{
//     console.log("connection open!!")
// })
//  .catch(err=>{
//     console.log("oh no error!!")
//     console.log(err)
// })
const movieSchema=new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
});
const Movie=mongoose.model('Movie',movieSchema);
// const amadeus=new Movie({title:'Amadeus',year:1986,Score:9.2,rating:'R'});

Movie.insertMany([
    {title:'Amelia',year:2001,score:8.3,ratting:'R' },
    {title:'Alien',year:1979,score:8.1,ratting:'R' },
    {title:'The iron Giant',year:1999,score:7.5,ratting:'PG' },
    {title:'Stand By Me',year:1986,score:8.6,ratting:'R' },
    {title:'Moonrise Kingdom',year:2012,score:7.3,ratting:'PG-13' },
])
.then(data=>{
    console.log("it worked!");
    console.log(data);
})

//gb me----> Movie.find({year:{gte:2010}}).then(data=>console.log(data))
//gb me---->Movie.firstOne({}).then(m=>console.log(m))
//gb me---->Movie.findById({"63b18d7a43c07bf15fd8081b"}).then(m=>console.log(m)
//gb me---->Movie.updateMany({title:{$in:[amadeus,Stand By Me]}},{score:10}).then(m=>console.log(m));
//gb me---->Movie.findOneAndUpdate({title:'The iron Giant'},{score:10},{new:true}).then(m=>console.log(m));