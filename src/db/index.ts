import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

// const dbUri = process.env.MONGO_URI || 'mongodb+srv://Divin:axel123@cluster0.rwph7ck.mongodb.net/?retryWrites=true&w=majority';
const dbUri = 'mongodb+srv://Divin:axel123@cluster0.rwph7ck.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(dbUri);

export async function dbConnect() {
  try {
    console.log('Connecting to database...');

    await client.connect();

    console.log('Connected to database');

    const db = client.db('financial_collection');

    const data = db.collection('data');

    return { data };
  } catch (error) {
    console.error(error);
    await client.close();
  }
}