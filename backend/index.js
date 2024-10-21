import express from 'express';
import pg from "pg";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


import { Sequelize ,DataTypes } from 'sequelize';

const app = express();
const port = process.env.PORT || 3000;

const sequelize = new Sequelize(
  process.env.DB_URL,
  {
  dialect:"postgres",
  logging :console.log,
  ssl: {
    require:true,
    rejectUnauthorized: false, // Change to true if you want stricter validation
  },
})

sequelize.sync().then(() => {
  console.log('Database connected');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER, // Use INTEGER for serial
    autoIncrement: true, // Automatically increment the id
    primaryKey: true, // Set this column as the primary key
  },
  username: {
    type: DataTypes.STRING,
    
  },
  email: {
    type: DataTypes.STRING,
    
  },
  password: {
    type: DataTypes.STRING,
    
  }
  
},{
  timestamps: false, // This enables createdAt and updatedAt fields
});



app.use(express.json());
app.use(cors({
  origin:'http://localhost:5173',
}));

app.get("/",(req,res)=>{
  res.send("Hello !! AM alive");
})

app.post('/signup', async (req, res) => {
  const { username, email,password } = req.body;
  console.log(username,email,password);
  try {
    const user = await User.create({username, email ,password});
    res.json({ success: true });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, message: 'Error creating user' });
  }
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    
    if (user && await (password == user.password)) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, message: 'Error logging in' });
  }
});
// app.post('/signup', async (req, res) => {
//   const { username, email, password } = req.body; // Destructure data from request body
//   console.log(username,email,password);
//   try {
//     const result = await db.query(
//       'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
//       [username, email, password] // Values to be inserted
//     );
//      // Get the ID of the inserted user
//     res.json({ success:true }); // Respond with the inserted user ID
//   } catch (error) {
//     console.error('Error inserting user:', error);
//   }
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body; // Destructure data from request body
//   console.log(username,password);
//   try {
//     const result = await db.query(
//       'select * from users where username = $1',
//       [username]
//       // Values to be inserted
//     );
//     if(result.rows.length >0){
//         const user =result.rows[0];
//         const storedPassword = user.password;
//         if(password==storedPassword){
//           res.json({ success:true });
//         }
//     } 
//      // Get the ID of the inserted user
//     res.json({ success:false }); // Respond with the inserted user ID
//   } catch (error) {
//     console.error('Error inserting user:', error);
//   }
// });


app.listen(port,()=>{
    console.log(`Server is at port : ${port}`);
})