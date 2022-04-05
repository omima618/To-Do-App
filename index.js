const express = require("express");
const app = express();

const mongoose = require("mongoose");
const usersRoutes = require("./routes/users")
const ConnectDB = require("./configs/db")

ConnectDB()

console.log(mongoose.connection.readyState)

app.use(express.json())


app.use('/users',usersRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT , (res)=>{
    console.log("server connected");

})