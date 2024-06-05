// dbConfig.js
import mysql from 'mysql2/promise'; // Using mysql2 with promise support
import { config } from 'dotenv';

config(); // Load environment variables from .env file

const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

console.log('Connected to the MySQL database.');

export default db;
