import express from 'express';
import dotenv from 'dotenv';
import db from './config/Database.js';
import session from 'express-session';
import cors from 'cors';
import TeamRoute from './routes/TeamRoute.js';
dotenv.config();

const app = express();

/* (async()=> {
    await db.sync();
})(); */

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto" } 
}));

app.use(cors({
    credentials: true,
    origin:'http://localhost:3000'
}));
app.use(express.json());
app.use(TeamRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// app.get('/', async (req, res) => {
//     try {
//         const [results] = await db.query('SELECT * FROM team');
//         res.json(results);
//     } catch (err) {
//         console.error('Error executing query:', err);
//         res.status(500).send('Server error');
//     }
// });