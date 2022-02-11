const mongoose=require('mongoose');
const credentialSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,

    },
    email:{
        type: String,
        required:true,
        unique:true

    },
    password: {
        type: String,
        required: true
    },
},
    {
        timestamps:true
    }

);
const Credential=mongoose.model('Credential',credentialSchema);
module.exports=Credential;