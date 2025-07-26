import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./db.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

// Create
app.post("/users", async (req, res) => {
    const {name, age, email, gender, city, country, contact, qualification, specification, job } = req.body;

    try {
        console.log("Received Data: ", req.body);
        const result = await db.query(
            "INSERT INTO crud_users (name, age, email, gender, city, country, contact, qualification, specification, job) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [name, age, email, gender, city, country, contact, qualification, specification, job]
        );
        res.status(201).json({message: "User added"})
        // res.json(result.rows[0])
    } catch(err) {
        console.log("Error inserting user:", err)
        res.status(500).json({err: "Error Inserting"})

    }
})

//Read
app.get("/users", async (req, res) => {
    try {
        const result = await db.query(
            "SELECT * FROM crud_users"
        );
        res.json(result.rows)
    } catch(err) {
        console.log("Error showing data", err.stack);
    }
})

//Update
app.put("/users/:id", async (req, res) => {
    const {name, age, email, gender, city, country, contact, qualification, specification, job} = req.body
    const {id} = req.params

    try {
        const result = await db.query(
            "UPDATE crud_users SET name=$1, age=$2, email=$3, gender=$4, city=$5, country=$6, contact=$7, qualification=$8, specification=$9, job=$10 WHERE id=$11 RETURNING *",
            [name, age, email, gender, city, country, contact, qualification, specification, job, id]
        );
        res.json(result.rows[0]);
    } catch(err) {
        console.log("Error updating data", err);
    }
})

//Delete
app.delete("/users/:id", async (req, res) => {
    const {id} = req.params

    try {
        await db.query(
            "DELETE FROM crud_users WHERE id=$1",
            [id]
        );
        res.json({Message: "User deleted"})
    } catch(err) {
        console.log("Error deleting data:", err);
    }
})

app.listen(port, (err) => {
    if(err) {
        console.log("Server error", err.stack);
    } else {
        console.log(`Server is running on localhost:${port}`);
    }
});