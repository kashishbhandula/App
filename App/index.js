const port =3000;
const express=require('express');
const expressLayout=require('express-ejs-layouts');

const app=express();


//Setting up view engine
app.set('view engine','ejs');
app.set('views','./view');

//Setting up layout
app.use(expressLayout);

// Setting up router
app.use('/',require('./router'));


app.listen(port,function(err)
{
    if(err){console.log("Server is not listening");return;}
    console.log(`Server is listening on port:${port}`);
})