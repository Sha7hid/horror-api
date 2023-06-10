const mongoose = require('mongoose');


// horror Schema

const horror = mongoose.model('horror',{
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    release_year:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
    
});

module.exports = {horror}