const { dbConnection } = require('./db');

async function main() {
  try {
    const db = await dbConnection();
    const collection = db.collection('users');
    const data = [
      { name: 'Jack', lastName: 'Singh' },
      { name: 'Jacob', lastName: 'Sing' },
    ];
    const insert = await collection.insertMany(data);
    console.log(insert);
  } catch (error) {
    console.log('error performing task'), error;
  }
}

main();
