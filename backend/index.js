/*first we have to define port where our express server will be running*/
//const port=4000;
/*now importing dependencies*/
//const express= require('express');
/*creating app instance using express*/
//const app=express();
/*initializing the mongoose package*/
//const mongoose=require("mongoose");
/*initializing jsonwebtoken*/
//const jwt=require("jsonwebtoken")
/*initializing the multer*/
//const multer=require("multer");
/*after that we will include the path module from the express server*/
//const path=require("path");
/*using this path we can get access to our backend directory in our express app*/
//const cors=require("cors");
/*with the help of this express.json, whatever request we will get from response that
will be automatically passed through json.*/
//app.use(express.json());
/*using this our react.js project will connect to express.app on 4000 port*/
//app.use(cors());
/*to initialize database we are creating a mongodb
database*/
//Database Connection with MongoDB
//const MONGODB_URI='mongodb+srv://lharshini9999:<Mongodb@123>@cluster0.aeuph1s.mongodb.net';
//mongoose.connect("mongodb+srv://lharshini9999:<Mongodb@123>@cluster0.aeuph1s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// mongoose.connect("mongodb+srv://lharshini9999:<Mongodb@123>@cluster0.aeuph1s.mongodb.net/e-commerce"//,//\{
  //useNewUrlParser: true,
 // useUnifiedTopology: true
//}
// );
//const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'))
//db.once('open', () => console.log('Connected to MongoDB'));
//API Creation endpoint:
//app.get("/", (req,res)=>{
    //res.send("Express App is Running")
//})

/*/*express login for our login endpoint, we can create multiple end points on the same*/
/*now will create api's to add our product in database,creating image storage engine*/
//image storage engine
//const storage= multer.diskStorage({
  //destination:'./upload/images',
  //filename:(req,file,cb)=>{
    //return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  //}
//})
//const upload=multer({storage:storage});
//creating upload endpoint for images
//app.use('/images',express.static('upload/images'))
//app.post("/upload",upload.single('product'),(req,res)=>{
//res.json ({
  //success:1,
  //image_url:`http://localhost:${port}/images/${req.file.filename}`
//})
//})
//API creation
//app.listen(port,(error)=>{
  //if(!error){
   //console.log("Server Running on Port"+port)
  //}
  //else
  //{
    //console.log("Error: "+error)
  //}
//})

const port=4000;

const express= require('express');

const app=express();

const mongoose=require("mongoose");

const jwt=require("jsonwebtoken")

const multer=require("multer");

const path=require("path");

const cors=require("cors");
const { type } = require('os');

app.use(express.json());

app.use(cors());
mongoose.connect("mongodb+srv://sample123:Mongodbweb123@cluster0.gnuab0d.mongodb.net/e-commerce");
/*similarly we are creating express login for our login end point, /allproducts to get all the products*/
/*creating multiple end points on the same api*/
//API Creation endpoint:
app.get("/", (req,res)=>{
    res.send("Express App is Running")
})

//Image storage Engine
const storage =multer.diskStorage({
  destination:'./upload/images',
  filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
const upload=multer({storage:storage})
//creating Upload Endpoint for images
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
          res.json({
            success:1,
            image_url:`http://localhost:${port}/images/${req.file.filename}`
          })
})
//Schema for Creating Products
const Product=mongoose.model("Product",{
  id:{
    type:Number,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  sub_category:{
  type:String,
  reuired:false
  },
  new_price:{
    type:Number,
    required:true,
  },
  old_price:{
    type:Number,
    required:true,
  },
  date:{
    type:Date,
    default:Date.now,
  },
  available:{
    type:Boolean,
    default:true,
  },
})
app.post('/addproduct',async(req,res)=>{
  let products=await Product.find({});
  let id;
  if(products.length>0){
    let last_product_array=products.slice(-1);
    let last_product=last_product_array[0];
    id=last_product.id+1;
  }
  else{
    id=1;
  }
 const product =new Product({
  id:id,
  name:req.body.name,
  image:req.body.image,
  category:req.body.category,
  sub_category:req.body.sub_category ?req.body.sub_category:'' ,
  new_price:req.body.new_price,
  old_price:req.body.old_price,
 });
 console.log(product);
 await product.save();
 console.log("saved");
 res.json({
  success: true,
  name:req.body.name,
 })
})
//Creating API for deleting Products
app.post('/removeproduct',async(req,res)=>{
 await Product.findOneAndDelete({id:req.body.id});
 console.log("Removed");
 res.json({
  success:true,
  name:req.body.name
 })
})
//Creating API for getting all products
app.get('/allproducts',async(req,res)=>{
  let products = await Product.find({});
  console.log("All Products Fetched");
  res.send(products);
})
//Shcema creating for User model
const Users=mongoose.model('Users',{
  name:{
    type:String,
  },
  email:{
    type:String,
    unique:true,
  },
  password:{
    type:String,
  },
  cartData:{
    type:Object,
  },
  date:{
    type:Date,
    default:Date.now,
  }

})
//Creating Endpoint for registering the user
app.post('/signup',async(req,res)=>{
  let check=await Users.findOne({email:req.body.email});
  if(check){
    return res.status(400).json({success:false,errors:"existing user found with same email address"})
  }
  let cart={};
  for (let i = 0; i <300; i++) {
   cart[i]=0;
    
  }
  const user= new Users({
    name:req.body.username,
    email: req.body.email,
    password:req.body.password,
    cartData:cart,
  })
  //to save the user
  await user.save();
  //after creating user we use jwt authentication, in order to use it we need to create a data
  const data={
    user:{
      id:user.id
    }
  }
  const token=jwt.sign(data,'secret_ecom');
  res.json({success:true,token})
})
//creating endpoint for user login
app.post('/login',async(req,res)=>{
   let user=await Users.findOne({email:req.body.email});
   if(user){
     const passCompare=req.body.password===user.password;
     if(passCompare){
      const data={
        user:{
          id:user.id
        }
      }
      const token=jwt.sign(data,'secret_ecom');
      res.json({success:true,token});
     }
     else{
      res.json({success:false,errors:"Wrong Password"});
     }
   }
   else{
    res.json({success:false,errors:"Wrong Email Id"})
   }
})
//creating endpoint for newcollection data
app.get('/newcollections',async (req,res)=>{
  let products= await Product.find({});
  let newcollections=products.slice(1).slice(-8);
  console.log("NewCollection Fetched");
  res.send(newcollections);
})
//creating endpoint for popular in women section
app.get('/popularinwomen',async (req,res)=>{
  let products = await Product.find({category:"women"});
  let popular_in_women=products.slice(0,4);
  console.log("Popular in women fetched")
  res.send(popular_in_women);
})
//creating middleware to fetch user
const fetchUser=async (req,res,next)=>{
  const token=req.header('auth-token');
 if(!token){
   res.status(401).send({errors:"Please authenticate using valid token"})
 }
 else{
 try {
  const data=jwt.verify(token,'secret_ecom');
  req.user=data.user;
  next();
 } catch (error) {
     res.status(401).send({errors:"please authenticate using a valid token"})
    }

  }
}

//creating endpoint for adding products in cartdata
app.post('/addtocart',fetchUser,async(req,res)=>{
console.log("Added",req.body.itemId);
// let userData=await Users.findOne({_id:req.user.id});
// userData.cartData[req.body.itemId] +=1;
// await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
res.send("Added")
})
/* //creating endpoint to remove product from cartdata
app.post('/removefromcart',fetchUser,async(req,res)=>{
    console.log("removed",req.body.itemId);
    let userData=await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})
//creating endpoint to get cartdata
app.post('/getcart',fetchUser,async (req,res)=>{
        console.log("GetCart");
        let userData = await Users.findOne({_id:req.user.id});
        res.json(userData.cartData);
})*/

app.listen(port,(error)=>{
  if(!error){
    console.log("Server Running on Port"+port)
  }
  else
  {
    console.log("Error: "+error)
  }
})