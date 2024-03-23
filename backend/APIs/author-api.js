const exp=require('express')
const authorApp=exp.Router()
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
let articlesCollection
let authorsCollection;
authorApp.use((req,res,next)=>{
    authorsCollection=req.app.get('authorsCollection')
    articlesCollection=req.app.get('articlesCollection')
    next()
})

//create author
authorApp.post('/register',async(req,res)=>{
    //get author from req
    let newAuthor=req.body;
    //check for dup user
   let dbAuthor= await authorsCollection.findOne({username:newAuthor.username})
   if(dbAuthor!==null)
   {
    return res.send({message:'author already existed'})
   }
    //hash the password
    let hashedPassword=await bcryptjs.hash(newAuthor.password,6)
    //replace plain pw with hashed pw
    newAuthor.password=hashedPassword;
    //save to db
    await authorsCollection.insertOne(newAuthor)
    //send res
    res.send({message:"Author created"})
})


//login author
authorApp.post('/login',async(req,res)=>{
    //get author credential obj
    const credObj=req.body
    //verify username
    let dbAuthor=await authorsCollection.findOne({username:credObj.username})
    //if user not found
    if(dbAuthor===null)
    {
        res.send({message:"Invalid username"})
    }
    else{
       let result= await bcryptjs.compare(credObj.password,dbAuthor.password)
       //if passwords not matched
       if(result===false)
       {
        res.send({message:"Invalid password"})
       }
       else{
        //create token
        let signedToken=jwt.sign({username:dbAuthor.username},'abcdef',{expiresIn:30})
        //send token as res
        res.send({message:"login successful",token:signedToken,author:dbAuthor})
       }
    }

})
//add article
authorApp.post('/article',async(req,res)=>{
    //get new article from req
    const newArticle=req.body
    //save to article collection
    await articlesCollection.insertOne(newArticle)
    //send res
    res.send({message:"new article added"})
})
//read articles
authorApp.get('/articles/:username',async(req,res)=>{
    //get author's username from url
    let authorUsername=req.params.username
    //get articles of ccurrent author
    let articlesList=await articlesCollection.find({username:authorUsername}).toArray()
    //send res
    res.send({message:"articles",payload:articlesList})
})




// //delete or restore article
// authorApp.put('/articles/:username/:articleId',async(req,res)=>{
//     //get article id  from url
//     let articleIdOfUrl=req.params.articleId
//     let removedArticle=await articlesCollection.findOneAndUpdate({articleId:articleIdOfUrl},{$set:{status:false}},{returnDocument:"after"})
//    res.send({message:"Article removed",payload:removedArticle})
// })


authorApp.put('/articles/:username/:articleId',async(req,res)=>{
    //get article id  from url
  let articleIdOfUrl=req.params.articleId
    let currentStatus=req.body.status
if(currentStatus===true)
{
    let removedArticle=await articlesCollection.findOneAndUpdate({articleId:articleIdOfUrl},{$set:{status:true}},{returnDocument:"after"})
    res.send({message:"Article removed",payload:removedArticle})
}
if(currentStatus===false)
{
    let restoredArticle=await articlesCollection.findOneAndUpdate({articleId:articleIdOfUrl},{$set:{status:false}},{returnDocument:"after"})
    res.send({message:"Article removed",payload:restoredArticle})
}

})

//edit article
authorApp.put('/article',async(req,res)=>{
    let modifiedArticle=req.body
    let articleAfterModification=await articlesCollection.findOneAndUpdate(
        {articleId:modifiedArticle.articleId},
        {$set:{...modifiedArticle}},
        {returnDocument:"after"}
    )
    res.send({messsage:"article updated",payload:articleAfterModification})
})

module.exports=authorApp;