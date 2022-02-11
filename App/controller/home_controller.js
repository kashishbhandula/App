const Post=require('../model/post')
module.exports.home=function(req,res){

    console.log("Home controller is working fine");
   // console.log(req.cookies);
    //res.cookie('hello',25);
    
    Post.find({},function(err,posts)
    {
        return res.render('home',{
            posts:posts
        })
    });
    
    //populate the user of image
    /*Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home',{
            posts:posts
        });
    })*/
    return;

};