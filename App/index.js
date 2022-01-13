const port =3000;
const express=require('express');
const app=express();


app.set('view engine','ejs');
app.set('views','./view');

app.get('/',function(req,res){
    //res.end('<h1>Hello</h1>')
    res.render('home');
    return;
})

app.listen(port,function(err)
{
    if(err){console.log("Server is not listening");return;}
    console.log(`Server is listening on port:${port}`);
})