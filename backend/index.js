import express from 'express';
import pg from "pg";
import bodyParser from "body-parser";
import cors from 'cors';



const app = express();
const port = 3000;

const db = new pg.Client({
  host:"localhost",
  user:"postgres",
  port:"5432",
  password:"2004",
  database:"campusConnect"
})

db.connect();

app.use(express.json());
app.use(cors({
  origin:'http://localhost:5173',
}));

app.get("/",(req,res)=>{
  res.send("Hello !! AM alive");
})


app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body; // Destructure data from request body
  console.log(username,email,password);
  try {
    const result = await db.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
      [username, email, password] // Values to be inserted
    );
     // Get the ID of the inserted user
    res.json({ success:true }); // Respond with the inserted user ID
  } catch (error) {
    console.error('Error inserting user:', error);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body; // Destructure data from request body
  console.log(username,password);
  try {
    const result = await db.query(
      'select * from users where username = $1',
      [username]
      // Values to be inserted
    );
    if(result.rows.length >0){
        const user =result.rows[0];
        const storedPassword = user.password;
        if(password==storedPassword){
          res.json({ success:true });
        }
    } 
     // Get the ID of the inserted user
    res.json({ success:false }); // Respond with the inserted user ID
  } catch (error) {
    console.error('Error inserting user:', error);
  }
});


app.listen(port,()=>{
    console.log(`Server is at port : ${port}`);
})