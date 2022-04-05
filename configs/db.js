const mongoose = require("mongoose");

const ConnectDB = async()=>{

    try{
        mongoose.connect("mongodb+srv://todo:1312@todo.ghpn0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" , function () {
            console.log('connection state is : ' , mongoose.connection.readyState)
        });
    
    }catch(error){
        console.log(`ERROR : ${error.message}`);
    }
}

module.exports = ConnectDB