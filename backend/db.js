import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if(err) {
        console.log("Connection Error", err.stack)
    } else {
        console.log("Database Connected");
    }
});

export default db