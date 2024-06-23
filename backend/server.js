const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config()
// const node = require('nodemailer')
const app = express();

app.use(cors());
app.use(express.json());


const url = process.env.MONGO_URL;
const dbName = 'nirvana';

const client = new MongoClient(url);

async function connect() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');

        const db = client.db(dbName);
        // Perform actions on the collection object
        const users = db.collection('users')
        const admin = db.collection('admin')

        app.set('users', users)
        app.set('admin', admin)
        // client.close(); 
    } catch (err) {
        console.error(err);
    }
}


connect();

// const userApp = require('./api/user')
const adminApp = require('./api/admin')
const auth = require('./api/auth')
// app.use('/users', userApp)
app.use('/admin', adminApp)
app.use('/', auth)

app.listen(5000, ()=> console.log("server running on port 5000"));
