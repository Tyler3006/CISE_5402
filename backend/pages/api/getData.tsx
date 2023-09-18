const connectToDb = require('../../lib/connectToDb');

export default async function handler(req, res) {
  const client = await connectToDb();

  const db = client.db('your-database-name'); // replace with your database name
  const collection = db.collection('your-collection-name'); // replace with your collection name

  const data = await collection.find({}).toArray();

  res.status(200).json({ data });
}