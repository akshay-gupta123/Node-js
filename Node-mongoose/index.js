const mongoose = require("mongoose");
const Dishes = require("./models/dishes");
const dishes = require("./models/dishes");

const url = "mongodb://localhost:27017";
const connect = mongoose.connect(url,{useUnifiedTopology: true,useNewUrlParser: true});

connect.then((db)=>{
    
    console.log("Successful connected to server");
     dishes.create({
        name:"uttpizza",
        description:"test"
    })
    .then(dish=>{
        
        console.log(dish);
        return Dishes.findByIdAndUpdate(dish._id,{
            $set:{description:"Update test"}
        },{new:true}).exec() ;
    })
    .then(dish=>{

        console.log(dish);
        dish.comments.push({
            rating: 5,
            comment: 'I\'m getting a sinking feeling!',
            author: 'Leonardo di Carpaccio'
        });
        return dish.save();
    })
    .then((dish)=>{

        console.log(dish);
        return mongoose.connection.close();
    })
    .catch(err=>{
        console.log(err.message);
    })
})
.catch(err=>console.log(err.message));