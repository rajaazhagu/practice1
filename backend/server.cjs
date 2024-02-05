const mongoose=require('mongoose')
const express=require('express')
const app=express()
const routes=require('./routes.cjs')
const cors=require('cors')

app.use(cors())
app.use(express.json())

mongoose.connect( 'mongodb+srv://azhaguazhagu30:Theni123@cluster0.ipwnl5f.mongodb.net/raha?retryWrites=true&w=majority')   
  

app.use('/app',routes)
app.use('/side',routes)

app.listen(process.env.PORT || 3001,console.log('server  is up'))