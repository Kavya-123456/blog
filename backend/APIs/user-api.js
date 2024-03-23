const exp=require('express')
const userApp=exp.Router()
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const verifyToken=require('../Middlewares/verifyToken')
let usersCollection;
let articlesCollection
userApp.use((req,res,next)=>{
    usersCollection=req.app.get('usersCollection')
    articlesCollection=req.app.get('articlesCollection')
    next()
})

userApp.post('/register',async(req,res)=>{
    let newUser=req.body
    //Check for dupilcate user by username
    let dbUser=await usersCollection.findOne({username:newUser.username})
    //if author already existed
    if(dbUser!=null){
        res.send({message:"User already existed"})
    }
    //hash the password
    let hashedPassword=await bcryptjs.hash(newUser.password,6)
    //replace
    newUser.password=hashedPassword
    //save to db
    await usersCollection.insertOne(newUser)
    //send res
    res.send({message:"User Created"})
    //res.send('from author api')
})

//login author
userApp.post('/login',async(req,res)=>{
    //get author credential obj
    const credObj=req.body
    //verify username
    let dbUser=await usersCollection.findOne({username:credObj.username})
    //if user not found
    if(dbUser===null)
    {
        res.send({message:"Invalid username"})
    }
    else{
       let result= await bcryptjs.compare(credObj.password,dbUser.password)
       //if passwords not matched
       if(result===false)
       {
        res.send({message:"Invalid password"})
       }
       else{
        //create token
        let signedToken=jwt.sign({username:dbUser.username},'abcdef',{expiresIn:120})
        delete dbUser.password
        //send token as res
        res.send({message:"login successful",token:signedToken,author:dbUser})
       }
    }

})
userApp.get('/test-user',(req,res)=>{
    res.send('from user api')
 })
userApp.get("/articles",verifyToken,async(req,res)=>{
    //get articles of current author
    let articlesList= await articlesCollection.find({status:true}).toArray()
    res.send({message:"articles",payload:articlesList})
})
userApp.put('/article/:articleId/comment',async(req,res)=>{
    let commentObj=req.body
    let articleIdOfUrl=req.params.articleId
   let articleWithComment= await articlesCollection.findOneAndUpdate(
        {articleId:articleIdOfUrl},
        {$addToSet:{comments:commentObj}},{returnDocument:"after"})
res.send({message:"comment posted",payload:articleWithComment})
})
module.exports=userApp
