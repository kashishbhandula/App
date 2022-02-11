const Comment=require('../model/comment');
const Post=require('../model/post');
module.exports.create=function(req,res){

    Post.findById(req.body.post,function(err,post){
        if(post){
            Comment.create({
                comment:req.body.content,
                user:req.user._id
            }),
            function(err,comment){
                post.comments.push(comment);
                post.save();
                res.redirect('/');
    
            }

        }
        
    });
}