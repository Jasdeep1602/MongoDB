const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'myDatabase';

const dbConnection = async () => {
  try {
    await client.connect();
    console.log('connected Successfully');
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.log('Failed to connect', error);
    throw error;
  }
};

module.exports = { dbConnection };
