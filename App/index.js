const port =3000;
const { urlencoded } = require('express');
const express=require('express');
const expressLayout=require('express-ejs-layouts');
const db=require('./config/mongoose.ejs');
const cookieParser=require('cookie-parser');

const app=express();


//Setting up view engine
app.set('view engine','ejs');
app.set('views','./view');

//Setting up middleware
app.use(express.urlencoded());
//Setting up cookie Parser
app.use(cookieParser());
//Setting up layout
app.use(expressLayout);

//Using static files
app.use(express.static('./asset'));

// 
app.set('layout extraStyles', true);
app.set('layout extraScripts', true);

// Setting up router
app.use('/',require('./router'));


app.listen(port,function(err)   
{
    if(err){console.log("Server is not listening");return;}
    console.log(`Server is listening on port:${port}`);
});