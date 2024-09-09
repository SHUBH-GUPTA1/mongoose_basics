const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp');

const personSchema=new mongoose.Schema({
    first:String,
    last:String
})

personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
})
//middleware
personSchema.pre('Save',async function(){
    this.first='yo';
    this.last='mama';
    console.log("about to save")
})
personSchema.post('Save',async function(){
    console.log("saved!!")
})
const Person=mongoose.model('Person',personSchema);