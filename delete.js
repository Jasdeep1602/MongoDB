const { dbConnection } = require('./db');

async function main() {
  try {
    const db = await dbConnection();
    const collection = db.collection('users');
    const del = await collection.deleteMany({ name: 'Jacob' });
    console.log(del);
  } catch (error) {
    console.log('error performing task'), error;
  }
}

main();
