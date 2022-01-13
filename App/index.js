const port =3000;
const express=require('express');
const app=express();
app.listen(port,function(err)
{
    if(err){console.log("Server is not listening");return;}
    console.log("Server is listening on port",port);
})
app.get('/',function(req,res){

    res.end('<h1>Express Server is Listening</h1>')
});