const { dbConnection } = require('./db');

async function main() {
  try {
    const db = await dbConnection();
    const collection = db.collection('users');
    const update = await collection.updateMany(
      { name: 'Jacob' },
      { $set: { age: 20 } }
    );
    console.log(update);
  } catch (error) {
    console.log('error performing task'), error;
  }
}

main();
