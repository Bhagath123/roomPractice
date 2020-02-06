const Post=require('../model/register');

exports.getData=(req,res,next)=>{
    res.render('studentform/studentform');
}
exports.postData=(req,res,next)=>{
    const name=req.body.name;
    const phonenumber=req.body.phonenumber;
    const email=req.body.email;
    const post=new Post({
        name:name,
        phonenumber:phonenumber,
        email:email
    });
 post.save();
    
}