
// import { Route,Link, Outlet } from 'react-router-dom';
//  import React from 'react'
// import Home from './Home'
//  import Navbar from './Navbar'
// import User from './User';
//  import { Route } from 'react-router-dom';
//  const App = () => {
//    return (
//      <>
//        <Navbar/>
//        <Route>
//        <Route exact path="/" component={Home}/>
       
//        <Route exact path="/user" component={User}/>
       

//        </Route>
//               <Outlet/>
//      </>
//    )
//  }
 
//  export default App
 

// const express = require("express");
// const path = require("path");
// const app = express();
// require(".db/conn")

// const port = process.env.port || 3001;

// const static_path= path.join(__dirname, "../public")
// app.use(express.static())
// app.get("/",(req,res) =>{
//   res.send("hello ");
// })
// app.get("/register",(req,res)=>{
//   res.render("register");
// })
// app.post( "/register", async (req,res)=>{
//   try{
//     const registerEmployee = new Register({
//       email : req.body.email,
//       password : req.body.password
//     })
//     const registered = await registerEmployee.save();
//     res.status(201).render("Dashboard");
//   }
//   catch(error){
//     res.status(400).send(error);
//   }
// })
// app.listen( port , () =>{
//   console.log(`server is running at  port no ${port}`);
// })

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const  app = express();
 app.use(cors());
const mediaRoutes = require("../routes/media");
app.use('/api/v1/media', mediaRoutes)
const mongoUri ="mongodb://localhost:27017/Registraion";

mongoose.connect(mongoUri,{
    useNewUrlParser : true,
});

mongoose.connection.on('connected',()=>{
    console.log('Connected to database');
})
mongoose.connection.on('error',(err)=>{
    console.log("error not connected to database",err);
})
app.listen(4000, () =>{
    console.log("App is running at  PORT 4000")
})