const express=require('express')
const route=express.Router()
const nameController=require('./controller.cjs')
route.post('/name',nameController.nmae)
route.get('/user',nameController.User)

module.exports=route