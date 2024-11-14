
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/images", express.static("upload/images"));


// Ensure upload directory exists
const uploadDir = "./upload/images";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Database Connection
// mongoose.connect(
//   "mongodb+srv://vanishbarewarmca:user123@cluster0.hceim.mongodb.net/Merchanza"
// ).then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("Failed to connect to MongoDB:", err));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Image Storage Setup
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

// Models

// Product Schema
const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

// User Schema
const User = mongoose.model("User", {
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: { type: Object },
  date: { type: Date, default: Date.now },
});

// Routes

// Image Upload Route
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }
  res.json({
    success: true,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Get All Uploaded Images
app.get("/imagelist", (req, res) => {
  const directoryPath = path.join(__dirname, "upload/images");
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Unable to scan files" });
    }
    const imageUrls = files.map(file => `http://localhost:${port}/images/${file}`);
    res.json({ success: true, images: imageUrls });
  });
});

// Delete Image Route
app.post("/removeimage", (req, res) => {
  const imagePath = `./upload/images/${req.body.filename}`;
  fs.unlink(imagePath, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to delete image",
      });
    }
    res.json({
      success: true,
      message: "Image deleted successfully",
    });
  });
});

// Add Product Route
app.post("/addproduct", async (req, res) => {
  try {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await product.save();
    res.json({ success: true, name: req.body.name });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Delete Product Route
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({ success: true, name: req.body.name });
});

// Get All Products
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  res.send(products);
});

// User Signup Route
app.post("/signup", async (req, res) => {
  try {
    let check = await User.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({ success: false, errors: "Existing user found with the same email" });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
    });

    await user.save();
    const data = { user: { id: user.id } };
    const token = jwt.sign(data, "secret_ecom");
    res.json({ success: true, token });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// User Login Route
app.post("/login", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user && req.body.password === user.password) {
      const data = { user: { id: user.id } };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong Email or Password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Fetch User Middleware
const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ errors: "Please authenticate using valid login" });
  }

  try {
    const data = jwt.verify(token, "secret_ecom");
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ errors: "Please authenticate using valid token" });
  }
};

// Add To Cart Route
app.post("/addtocart", fetchUser, async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send("Added");
});

// New Collection Route
app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  res.send(products.slice(-8));
});

// Popular Products Route
app.get("/popularproducts", async (req, res) => {
  let products = await Product.find({ category: "clothing" });
  res.send(products.slice(0, 4));
});

// Root Route
app.get("/", (req, res) => {
  res.send("Express app is Running");
});

// Start the server
app.listen(port, (error) => {
  if (!error) {
    console.log("Server is Running on Port: " + port);
  } else {
    console.log("Error: " + error);
  }
});
























//---------------------------------- complete down

// const express = require("express");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const cors = require("cors");
// const path = require("path");
// const fs = require("fs");
// const jwt = require("jsonwebtoken");

// const app = express();
// const port = 4000;

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.use("/images", express.static("upload/images"));

// // Ensure upload directory exists
// const uploadDir = "./upload/images";
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Database Connection
// mongoose.connect(
//   "mongodb+srv://vanishbarewarmca:user123@cluster0.hceim.mongodb.net/Merchanza"
// ).then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("Failed to connect to MongoDB:", err));

// // Image Storage Setup
// const storage = multer.diskStorage({
//   destination: uploadDir,
//   filename: (req, file, cb) => {
//     cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//   },
// });
// const upload = multer({ storage });

// // Models

// // Product Schema
// const Product = mongoose.model("Product", {
//   id: { type: Number, required: true },
//   name: { type: String, required: true },
//   image: { type: String, required: true },
//   category: { type: String, required: true },
//   new_price: { type: Number, required: true },
//   old_price: { type: Number, required: true },
//   date: { type: Date, default: Date.now },
//   available: { type: Boolean, default: true },
// });

// // User Schema
// const User = mongoose.model("User", {
//   name: { type: String },
//   email: { type: String, unique: true },
//   password: { type: String },
//   cartData: { type: Object },
//   date: { type: Date, default: Date.now },
// });

// // Routes

// // Image Upload Route
// app.post("/upload", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ success: false, message: "No file uploaded" });
//   }
//   res.json({
//     success: true,
//     image_url: `http://localhost:${port}/images/${req.file.filename}`,
//   });
// });

// // Get All Uploaded Images
// app.get("/imagelist", (req, res) => {
//   const directoryPath = path.join(__dirname, "upload/images");
//   fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//       return res.status(500).json({ success: false, message: "Unable to scan files" });
//     }
//     const imageUrls = files.map(file => `http://localhost:${port}/images/${file}`);
//     res.json({ success: true, images: imageUrls });
//   });
// });

// // Delete Image Route
// app.post("/removeimage", (req, res) => {
//   const imagePath = `./upload/images/${req.body.filename}`;
//   fs.unlink(imagePath, (err) => {
//     if (err) {
//       return res.status(500).json({
//         success: false,
//         message: "Failed to delete image",
//       });
//     }
//     res.json({
//       success: true,
//       message: "Image deleted successfully",
//     });
//   });
// });

// // Add Product Route
// app.post("/addproduct", async (req, res) => {
//   try {
//     let products = await Product.find({});
//     let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

//     const product = new Product({
//       id: id,
//       name: req.body.name,
//       image: req.body.image,
//       category: req.body.category,
//       new_price: req.body.new_price,
//       old_price: req.body.old_price,
//     });

//     await product.save();
//     res.json({ success: true, name: req.body.name });
//   } catch (error) {
//     console.error("Error adding product:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // Delete Product Route
// app.post("/removeproduct", async (req, res) => {
//   await Product.findOneAndDelete({ id: req.body.id });
//   res.json({ success: true, name: req.body.name });
// });

// // Get All Products
// app.get("/allproducts", async (req, res) => {
//   let products = await Product.find({});
//   res.send(products);
// });

// // User Signup Route
// app.post("/signup", async (req, res) => {
//   try {
//     let check = await User.findOne({ email: req.body.email });
//     if (check) {
//       return res.status(400).json({ success: false, errors: "Existing user found with the same email" });
//     }

//     let cart = {};
//     for (let i = 0; i < 300; i++) {
//       cart[i] = 0;
//     }

//     const user = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       cartData: cart,
//     });

//     await user.save();
//     const data = { user: { id: user.id } };
//     const token = jwt.sign(data, "secret_ecom");
//     res.json({ success: true, token });
//   } catch (error) {
//     console.error("Error during signup:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // User Login Route
// app.post("/login", async (req, res) => {
//   try {
//     let user = await User.findOne({ email: req.body.email });
//     if (user && req.body.password === user.password) {
//       const data = { user: { id: user.id } };
//       const token = jwt.sign(data, "secret_ecom");
//       res.json({ success: true, token });
//     } else {
//       res.json({ success: false, errors: "Wrong Email or Password" });
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // Fetch User Middleware
// const fetchUser = (req, res, next) => {
//   const token = req.header("auth-token");
//   if (!token) {
//     return res.status(401).send({ errors: "Please authenticate using valid login" });
//   }

//   try {
//     const data = jwt.verify(token, "secret_ecom");
//     req.user = data.user;
//     next();
//   } catch (error) {
//     res.status(401).send({ errors: "Please authenticate using valid token" });
//   }
// };

// // Add To Cart Route
// app.post("/addtocart", fetchUser, async (req, res) => {
//   let userData = await User.findOne({ _id: req.user.id });
//   userData.cartData[req.body.itemId] += 1;
//   await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
//   res.send("Added");
// });

// // New Collection Route
// app.get("/newcollections", async (req, res) => {
//   let products = await Product.find({});
//   res.send(products.slice(-8));
// });

// // Popular Products Route
// app.get("/popularproducts", async (req, res) => {
//   let products = await Product.find({ category: "clothing" });
//   res.send(products.slice(0, 4));
// });

// // Root Route
// app.get("/", (req, res) => {
//   res.send("Express app is Running");
// });

// // Start the server
// app.listen(port, (error) => {
//   if (!error) {
//     console.log("Server is Running on Port: " + port);
//   } else {
//     console.log("Error: " + error);
//   }
// });


























































































//------------------------c
// const port = 4000;
// const  express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const cors = require("cors");
// const path = require("path");
// const { error } = require("console");
// const { type } = require("os");

// app.use(express.json());
// app.use(cors());

// // -------------------Database Connection With mongodb

// mongoose.connect("mongodb+srv://vanishbarewarmca:user123@cluster0.hceim.mongodb.net/Merchanza?retryWrites=true&w=majority&appName=Cluster0")

// //Image storage engine

// const storage = multer.diskStorage({
//     destination:'./upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname
//             (file.originalname)}`)
//     }
// })

// const upload = multer({storage:storage});

// // Creating endpoint for images

// app.use("/images", express.static('upload/images'))
// app.post("/upload", upload.single('product'),(req, res)=>{
//     res.json({
//         success:1,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     })
// })



// // -------------------

// // Schema for creating products

// const Product = mongoose.model("Product",{
//     id:{
//         type:Number,
//         required:true,
//     },
//     name:{
//         type: String,
//         require:true,
//     },
//     image:{
//         type:String,
//         required:true,
//     },
//     category:{
//        type:String,
//        required:true,
//     },
//     new_price:{
//         type:Number,
//         required:true,
//     },
//     old_price:{
//         type:Number,
//         required:true,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     },
//     available:{
//         type:Boolean,
//         default:true,
//     },
// })

// app.post('/addproduct',async(req,res)=>{
//     let products = await Product.find({});
//     let id;
//     if(products.length>0){
//         let last_product_array = products.slice(-1);
//         let last_product = last_product_array[0];
//         id = last_product.id+1;
//     } else {
//         id= 1;
//     }
//     const product = new Product({
//         id:id,
//         name:req.body.name,
//         image:req.body.image,
//         category:req.body.category,
//         new_price:req.body.new_price,
//         old_price:req.body.old_price,
//     });

//     console.log(product);
//     await product.save();
//     console.log("Saved");
//     res.json({
//         success:true,
//         name:req.body.name,
//     })
// })




// // Creating API for deleting products
// app.post('/removeproduct', async(req, res)=>{
//     await Product.findOneAndDelete({id:req.body.id});
//     console.log("Removed");
//     res.json({
//         success:true,
//         name:req.body.name
//     })
// })

// // -------------------

// //  Creating API For getting all products*
// app.get("/allproducts", async(req, res)=>{
//     let products = await Product.find({});
//     console.log("All products Fetched");
//     res.send(products);
// })

// // Schema Creating for User Model
// const User = mongoose.model('User',{
//     name:{
//         type:String,
//     },
//     email:{
//         type:String,
//         unique:true,
//     },
//     password:{
//         type:String,
//     },
//     cartData:{
//         type:Object,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     },
// });

// // Creating endpoint for registering user
// app.post('/signup', async(req, res)=>{
//     let check = await User.findOne({ email:req.body.email });
//     if(check){
//         return res.status(400).json({
//             success:false,
//             errors:"Existing user found with same email"
//         })
//     }
//     let cart = {};
//     for(let i=0; i<300; i++){
//         cart[i] = 0;
//     }
//     const user = new User({
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password,
//         cartData:cart,
//     })

//     await user.save();
//     const data = {
//         user:{
//             id: user.id,
//         },
//     };
//     const token = jwt.sign(data, "secret_ecom");
//     res.json({success:true, token})
// })

// // creating endpoint for user login
// app.post('/login', async(req, res)=>{
//     let user = await User.findOne({email:req.body.email})
//     if(user){
//         const passMatch= req.body.password === user.password;
//         if(passMatch){
//             const data = {
//                 user: {
//                     id:user.id,
//                 },
//             };
//             const token = jwt.sign(data, "secret_ecom");
//             res.json({success:true, token});
//         } else {
//             res.json({success:false, errors: "Wrong Password"});
//         }
//     } else {
//         res.json({success:false, errors: " wrong Email address"});
//     }
// });

// // Creating endpoint for newcollection data
// app.get('/newcollections', async(req, res)=>{
//     let products = await Product.find({});
//     let newcollection = products.slice(1).slice(-8);
//     console.log("NewCollection Fetched");
//     res.send(newcollection);
// })

// // Creating endpoint for popularproducts data
// app.get('/popularproducts', async(req, res)=>{
//     let products = await Product.find({category:'clothing'});
//     let popularproducts = products.slice(0,4);
//     console.log("Popularproducts Fetched");
//     res.send(popularproducts);
// })

// // Creating middleware to fetch user

// const fetchUser = async (req, res, next)=>{
//     const token = req.header('auth-token');
//     if(!token){
//         res.status(401).send({errors: "Please authenticate using valid login"});
//     } else {
//         try {
//             const data=jwt.verify(token, "secret_ecom");
//             req.user = data.user;
//             next();
//         } catch (error) {
//             res.status(401).send({errors: "Please authenticate using valid token"});
//         }
//     }
// };

// // Creating endpoint for adding products in cartdata
// // app.post('/addtocart',fetchUser, async(req, res)=>{
// //     console.log(req.body)
// // })

// // ----------------------------

// app.post('/addtocart', fetchUser, async (req, res)=>{
//     let userData = await User.findOne({_id:req.user.id});
//     userData.cartData[req.body.itemId] += 1;
//     await User.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData});
//     res.send("Added");
// });


// // ---------------------------------------
// // addimage




// // ---------------------------------------




// // -----------------------------

// //API Creation

// app.get("/",(req,res)=>{
//     res.send("Express app is Running")
// })

// app.listen(port, (error)=>{
//     if(!error){
//         console.log("Server is Running on Port:" +port)
//     } else {
//         console.log("Error: " +error)
//     }
// })

//------------------------- c
















// ---------------------------------------

// const port = 4000;
// const  express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const cors = require("cors");
// const path = require("path");
// const { error } = require("console");
// const { type } = require("os");

// app.use(express.json());
// app.use(cors());

// // -------------------Database Connection With mongodb

// mongoose.connect("mongodb+srv://vanishbarewarmca:user123@cluster0.hceim.mongodb.net/Merchanza?retryWrites=true&w=majority&appName=Cluster0")

// //Image storage engine

// const storage = multer.diskStorage({
//     destination:'./upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname
//             (file.originalname)}`)
//     }
// })

// const upload = multer({storage:storage});

// // Creating endpoint for images

// app.use("images", express.static('upload/images'))
// app.post("/upload", upload.single('product'),(req, res)=>{
//     res.json({
//         success:1,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     })
// })



// // -------------------

// // Schema for creating products

// const Product = mongoose.model("Product",{
//     id:{
//         type:Number,
//         required:true,
//     },
//     name:{
//         type: String,
//         require:true,
//     },
//     image:{
//         type:String,
//         required:true,
//     },
//     category:{
//        type:String,
//        required:true,
//     },
//     new_price:{
//         type:Number,
//         required:true,
//     },
//     old_price:{
//         type:Number,
//         required:true,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     },
//     available:{
//         type:Boolean,
//         default:true,
//     },
// })

// app.post('/addproduct',async(req,res)=>{
//     let products = await Product.find({});
//     let id;
//     if(products.length>0){
//         let last_product_array = products.slice(-1);
//         let last_product = last_product_array[0];
//         id = last_product.id+1;
//     } else {
//         id= 1;
//     }
//     const product = new Product({
//         id:id,
//         name:req.body.name,
//         image:req.body.image,
//         category:req.body.category,
//         new_price:req.body.new_price,
//         old_price:req.body.old_price,
//     });

//     console.log(product);
//     await product.save();
//     console.log("Saved");
//     res.json({
//         success:true,
//         name:req.body.name,
//     })
// })

// // Creating API for deleting products
// app.post('/removeproduct', async(req, res)=>{
//     await Product.findOneAndDelete({id:req.body.id});
//     console.log("Removed");
//     res.json({
//         success:true,
//         name:req.body.name
//     })
// })

// // -------------------

// //  Creating API For getting all products*
// app.get("/allproducts", async(req, res)=>{
//     let products = await Product.find({});
//     console.log("All products Fetched");
//     res.send(products);
// })

// //API Creation

// app.get("/",(req,res)=>{
//     res.send("Express app is Running")
// })

// app.listen(port, (error)=>{
//     if(!error){
//         console.log("Server is Running on Port:" +port)
//     } else {
//         console.log("Error: " +error)
//     }
// })







// Complete full backend code



// const express = require("express");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const cors = require("cors");
// const path = require("path");
// const fs = require("fs");
// const jwt = require("jsonwebtoken");

// const app = express();
// const port = 4000;

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.use("/images", express.static("upload/images"));

// // Ensure upload directory exists
// const uploadDir = "./upload/images";
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Database Connection
// mongoose.connect(
//   "mongodb+srv://vanishbarewarmca:user123@cluster0.hceim.mongodb.net/Merchanza"
// ).then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("Failed to connect to MongoDB:", err));

// // Image Storage Setup
// const storage = multer.diskStorage({
//   destination: uploadDir,
//   filename: (req, file, cb) => {
//     cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//   },
// });
// const upload = multer({ storage });

// // Models

// // Product Schema
// const Product = mongoose.model("Product", {
//   id: { type: Number, required: true },
//   name: { type: String, required: true },
//   image: { type: String, required: true },
//   category: { type: String, required: true },
//   new_price: { type: Number, required: true },
//   old_price: { type: Number, required: true },
//   date: { type: Date, default: Date.now },
//   available: { type: Boolean, default: true },
// });

// // User Schema
// const User = mongoose.model("User", {
//   name: { type: String },
//   email: { type: String, unique: true },
//   password: { type: String },
//   cartData: { type: Object },
//   date: { type: Date, default: Date.now },
// });

// // Routes

// // Image Upload Route
// app.post("/upload", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ success: false, message: "No file uploaded" });
//   }
//   res.json({
//     success: true,
//     image_url: `http://localhost:${port}/images/${req.file.filename}`,
//   });
// });

// // Get All Uploaded Images
// app.get("/imagelist", (req, res) => {
//   const directoryPath = path.join(__dirname, "upload/images");
//   fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//       return res.status(500).json({ success: false, message: "Unable to scan files" });
//     }
//     const imageUrls = files.map(file => `http://localhost:${port}/images/${file}`);
//     res.json({ success: true, images: imageUrls });
//   });
// });

// // Delete Image Route
// app.post("/removeimage", (req, res) => {
//   const imagePath = `./upload/images/${req.body.filename}`;
//   fs.unlink(imagePath, (err) => {
//     if (err) {
//       return res.status(500).json({
//         success: false,
//         message: "Failed to delete image",
//       });
//     }
//     res.json({
//       success: true,
//       message: "Image deleted successfully",
//     });
//   });
// });

// // Add Product Route
// app.post("/addproduct", async (req, res) => {
//   try {
//     let products = await Product.find({});
//     let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

//     const product = new Product({
//       id: id,
//       name: req.body.name,
//       image: req.body.image,
//       category: req.body.category,
//       new_price: req.body.new_price,
//       old_price: req.body.old_price,
//     });

//     await product.save();
//     res.json({ success: true, name: req.body.name });
//   } catch (error) {
//     console.error("Error adding product:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // Delete Product Route
// app.post("/removeproduct", async (req, res) => {
//   await Product.findOneAndDelete({ id: req.body.id });
//   res.json({ success: true, name: req.body.name });
// });

// // Get All Products
// app.get("/allproducts", async (req, res) => {
//   let products = await Product.find({});
//   res.send(products);
// });

// // User Signup Route
// app.post("/signup", async (req, res) => {
//   try {
//     let check = await User.findOne({ email: req.body.email });
//     if (check) {
//       return res.status(400).json({ success: false, errors: "Existing user found with the same email" });
//     }

//     let cart = {};
//     for (let i = 0; i < 300; i++) {
//       cart[i] = 0;
//     }

//     const user = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       cartData: cart,
//     });

//     await user.save();
//     const data = { user: { id: user.id } };
//     const token = jwt.sign(data, "secret_ecom");
//     res.json({ success: true, token });
//   } catch (error) {
//     console.error("Error during signup:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // User Login Route
// app.post("/login", async (req, res) => {
//   try {
//     let user = await User.findOne({ email: req.body.email });
//     if (user && req.body.password === user.password) {
//       const data = { user: { id: user.id } };
//       const token = jwt.sign(data, "secret_ecom");
//       res.json({ success: true, token });
//     } else {
//       res.json({ success: false, errors: "Wrong Email or Password" });
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // Fetch User Middleware
// const fetchUser = (req, res, next) => {
//   const token = req.header("auth-token");
//   if (!token) {
//     return res.status(401).send({ errors: "Please authenticate using valid login" });
//   }

//   try {
//     const data = jwt.verify(token, "secret_ecom");
//     req.user = data.user;
//     next();
//   } catch (error) {
//     res.status(401).send({ errors: "Please authenticate using valid token" });
//   }
// };

// // Add To Cart Route
// app.post("/addtocart", fetchUser, async (req, res) => {
//   let userData = await User.findOne({ _id: req.user.id });
//   userData.cartData[req.body.itemId] += 1;
//   await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
//   res.send("Added");
// });

// // New Collection Route
// app.get("/newcollections", async (req, res) => {
//   let products = await Product.find({});
//   res.send(products.slice(-8));
// });

// // Popular Products Route
// app.get("/popularproducts", async (req, res) => {
//   let products = await Product.find({ category: "clothing" });
//   res.send(products.slice(0, 4));
// });

// // Root Route
// app.get("/", (req, res) => {
//   res.send("Express app is Running");
// });

// // Start the server
// app.listen(port, (error) => {
//   if (!error) {
//     console.log("Server is Running on Port: " + port);
//   } else {
//     console.log("Error: " + error);
//   }
// });
