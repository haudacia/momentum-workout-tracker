import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import routes from './routers/index.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes);

let memoryMongo = null;

const connectDB = async () => {
    mongoose.set('strictQuery', false);
    try {
        let dbUrl = process.env.DB_URL;
        if (process.env.NODE_ENV === 'test') {
            memoryMongo = await MongoMemoryServer.create();
            dbUrl = memoryMongo.getUri();
            console.log(dbUrl);
        }
        await mongoose.connect(dbUrl);
    } catch (err) {
        console.log(err);
    }
};

const disconnectDB = () => {
    mongoose.disconnect().then(() => {
        console.log('Disconnected from MongoDB');
    }
    ).catch((err) => {
        console.log('Error disconnecting from MongoDB', err);
    }
    );
};

connectDB().then(() => {
    console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);


const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);

// disconnectDB();

export { app, server };