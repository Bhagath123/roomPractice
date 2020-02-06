const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');
const app=express();
const authRouter=require('./Routes/auth');
const mongoose=require('mongoose');
app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));
app.use(authRouter);
mongoose.connect("mongodb+srv://Bhagath:Bhagath@cluster0-nih49.mongodb.net/test?retryWrites=true&w=majority").then(res=>{
    console.log("db is connected");
    app.listen(3000);
    
}).catch(err=>{
    console.log(err);
    
})
