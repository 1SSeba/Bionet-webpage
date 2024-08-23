import type { APIRoute } from 'astro';
import { connectToDatabase } from '../db';

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, password } = data;

    const db = await connectToDatabase();
    const collection = db.collection('users'); // Cambia esto con el nombre de tu colección

    const result = await collection.insertOne({ name, email, password });
    return new Response(JSON.stringify({ message: 'User registered successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error registering user:', error);
    return new Response(JSON.stringify({ error: 'Error registering user' }), { status: 500 });
  }
};
