//create express app
const exp=require('express')
const app=exp();
const mongoClient=require('mongodb').MongoClient;
const userApp=require("./APIs/user-api");
const authorApp=require("./APIs/author-api");
const adminApp=require('./APIs/admin-api')
const path=require('path')
const cors = require('cors')
//apply body parser middleware
app.use(exp.json())
app.use(cors())
//connect react build with server
app.use(exp.static(path.join(__dirname,'../frontend/build')))

const dbUrl='mongodb://localhost:27017'
//connect to mongodb
mongoClient.connect(dbUrl)
.then(client=>{
    const dbObj=client.db('pvpblogdb');
    //create collection objects
    const usersCollection=dbObj.collection("users")
    const authorsCollection=dbObj.collection("authors")
    const articlesCollection=dbObj.collection("articles")
    //share collections
    app.set('usersCollection',usersCollection)
    app.set('authorsCollection',authorsCollection)
    app.set('articlesCollection',articlesCollection)
    console.log("DB connection success")
})
.catch()

//forward req obj to apis
app.use("/user-api",userApp)
app.use("/author-api",authorApp)
app.use("/admin-api",adminApp)

//error handling middleware
app.use((err,req,res,next)=>{
    res.send({message:"error",payload:err.message})
})

const port=4000;
app.listen(port,console.log(`Http Server on port ${port}`))
