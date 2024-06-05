import express from 'express';
import db from './dbconfig.js'; 

const app = express();


app.get('/', async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM your_table_name');
        res.json(results);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Server error');
    }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
