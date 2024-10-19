import express from 'express';
import pg from "pg";
import bodyParser from "body-parser";
import cors from 'cors';
import pool from './dbcon.js';


const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.send("Hello !! AM alive");
})


app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body; // Destructure data from request body

  try {
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
      [username, email, password] // Values to be inserted
    );

   
     // Get the ID of the inserted user
    res.json({ success:true }); // Respond with the inserted user ID
  } catch (error) {
    console.error('Error inserting user:', error);
  }
});


app.listen(port,()=>{
    console.log(`Server is at port : ${port}`);
})