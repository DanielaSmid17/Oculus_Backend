const express = require('express')
const app = express()
const cors = require('cors')
const { initializeDB } = require('./db')
const users = require('./routes/users')
const login = require('./routes/login')
const patients = require('./routes/patients')
require('dotenv').config();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', users)
app.use('/api/login', login)
app.use('/api/patients', patients)

initializeDB()

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})