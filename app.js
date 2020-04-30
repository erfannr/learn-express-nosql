const express = require("express");
const app = express()
const { PORT, db} = require("./config")

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res) =>{
    res.status(200).json({messege:"hello to nosql api"});
});

app.use("/users", require("./routes/users"));

if (db){
    app.listen(PORT, () => {
        console.log(`this app listen to port ${PORT}`)
    })
}


