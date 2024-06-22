const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config()
// const node = require('nodemailer')
const app = express();

app.use(cors());
app.use(express.json());


const url = 'mongodb+srv://nirvana:nirvana@cluster0.12tcr9y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'blogr';

const client = new MongoClient(url);

async function connect() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');

        // const db = client.db(dbName);
        // Perform actions on the collection object
        // const users = db.collection('users')
        // const blogs = db.collection('blogs')

        // app.set('users', users)
        // app.set('blogs', blogs)
        // client.close(); 
    } catch (err) {
        console.error(err);
    }
}


connect();

// const userApp = require('./api/user')
// const blogApp = require('./api/blogroute')
// const auth = require('./api/auth')
// app.use('/users', userApp)
// app.use('/blogs', blogApp)
// app.use('/auth', auth)

app.listen(5000, ()=> console.log("server running on port 5000"));
