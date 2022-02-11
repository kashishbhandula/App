const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const Credential=require('../model/credentials.js'); 
// authentication using passport
passport.use(new LocalStrategy(
{
    usernameField:'email',
    passReqToCallback:true
},

    function(req,email,password,done){
        //finding a user and establish the identity
        Credential.findOne({email:email},function(err,user){
            if(err)
            {
                console.log("error in finding the passport");
                return done(err);
            }
            if(!user||user.password!=password)
            {
                console.log('Invalid user name password');
                return done(null,false);
            }
            return done(null,user);
        });

    }

));
//////////////serialize the user to decide which key to be kept in key
passport.serializeUser(function(user,done)
{
    done(null,user.id);
});
passport.deserializeUser(function(id,done)
{
    Credential.findById(id,function(err,user){
        if(err)
        {
            console.log("error in finding the user");
            return done(err);
        }
        return done(null,user);
    });
});

passport.checkAuthentication=function(req,res,next)
{
    if(req.isAuthenticated())
    {
        return next();
    }
    // if user is not signed
     res.redirect('/sign_in');
}
passport.setAuthenticatedUser=function(req,res,next)
{
    if(req.isAuthenticated())
    {
        //console.log(res);
        // req.user contains the current sign in user from session cokkie and we are just sending it for the views
        res.locals.user=req.user;
        

    }
    next();
}


module.exports=passport;