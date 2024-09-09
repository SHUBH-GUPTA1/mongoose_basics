const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:20  //maxlength of string is 20 otherwise its throws err
    },
    price:{
        type:Number,
        required:true,
        min:0           //min price of product is 0 otherwise throws err
    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories:[String],
    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    },
    size:{
        type:String,
        enum:['S','M','L']
    }
});

// const Product=mongoose.model('Product',productSchema);
// const bike=new Product({name:'Mountain Bike',price:599,categories:['Cycling','Safety']})
// bike.save()
// .then(data=>{
//     console.log("it worked");
//     console.log(data);
// })
// .catch(err=>{
//     console.log("oh no error!!")
//     console.log(err);
// })

// Product.findOneAndUpdate({name:'Mountain Bike'},{price:-19.99},{new:true,runValidators:true})
// .then(data=>{
//     console.log("it worked");
//     console.log(data);
// })
// .catch(err=>{
//     console.log("oh no error!!")
//     console.log(err);
// })

// productSchema.methods.greet=function(){
//     console.log("Hello!!! hi!! howdydyd")
//     console.log(`-from ${this.name}`)
// }

productSchema.methods.toggleonSale=function(){
    this.onSale=!this.onSale;
    return this.save();
}
 
productSchema.methods.addCategory=function(newCat){
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale=function(){
    return this.updateMany({},{onSale:true,price:0})
}

const Product=mongoose.model('Product',productSchema);

const findProduct=async()=>{
    const foundProduct=await Product.findOne({name:'Mountain Bike'});
    // foundProduct.greet();
    console.log(foundProduct)
    await foundProduct.toggleonSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}
Product.fireSale().then(res=>console.log(res))
// findProduct();

