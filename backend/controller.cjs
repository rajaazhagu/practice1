const user=require('./model.cjs')

const nmae=(async(req,res)=>{
 const{name}=req.body
 const data={
    name:name
 }
 await user.insertMany([data])
 res.json('post')
})
const User=(async(req,res)=>{

const data= await user.find()
 res.json(data)
})

module.exports={nmae,User}