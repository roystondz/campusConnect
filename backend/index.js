import express from 'express';
import pg from "pg";
import bodyParser from "body-parser";
import cors from 'cors';


const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

const db = new pg.Client({
    user:"",
    host:"",
    database:"authenticate",
    password:"",
    port:18661,
})

db.connect();

app.post('/submit', (req, res) => {
  const {username,password} = req.body;
     
  console.log('Data received:', username ,password);

  res.send('Data received successfully');
});

app.listen(port,()=>{
    console.log(`Server is at port : ${port}`);
})