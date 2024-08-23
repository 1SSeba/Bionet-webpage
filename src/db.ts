import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI as string;
const client = new MongoClient(uri);

let database: any;

export async function connectToDatabase() {
  if (database) return database;
  try {
    await client.connect();
    database = client.db('yourDatabaseName'); // Cambia esto con el nombre de tu base de datos
    console.log('Connected to database');
    return database;
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw error;
  }
}
