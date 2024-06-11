import express from 'express';
import dotenv from 'dotenv';
import db from './config/Database.js';
import session from 'express-session';
import cors from 'cors';
import SequelizeStor from 'connect-session-sequelize';
import fileUpload from 'express-fileupload';
import TeamRoute from './routes/TeamRoute.js';
import UserRoute from './routes/UserRoute.js';
import AuthRoute from './routes/AuthRoutes.js';
dotenv.config();

const app = express();

const sessionStore = SequelizeStor(session.Store);

const store = new sessionStore({
    db: db
});

// (async()=> {
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: { secure: "auto" } 
}));

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:5173'] 
}));

app.use(express.json());
app.use(TeamRoute);
app.use(UserRoute);
app.use(AuthRoute);
app.use(fileUpload());

//store.sync();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

