import express from 'express';
import pg from "pg";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Hello from server");
})

app.listen(port,()=>{
    console.log(`Server is at port : ${port}`);
})