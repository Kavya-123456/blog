//const {ModuleDetectionKind}=require("typescript")
const jwt=require('jsonwebtoken')
const verifyToken=(req,res,next)=>{
    let bearerToken=req.headersauthorization
    if(bearerToken===undefined)
    {
        res.send({message:'Unauthorized access'})
    }
    let token=bearerToken.split(' ')[1]

    try{
    let decodedToken=jwt.verify(token,'abcdef')
    }catch(err){res.send({message:err.message})}
}
module.exports=verifyToken