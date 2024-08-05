//? Run script for clearing db
const connection = require('../config/connection');

connection.on('error', (err) => err);

connection.once('open', async () => {
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }

    let categoryCheck = await connection.db.listCollections({ name: 'categories' }).toArray();
    if (categoryCheck.length) {
        await connection.dropCollection('categories');
    }

    let subcategoryCheck = await connection.db.listCollections({ name: 'subcategories' }).toArray();
    if (subcategoryCheck.length) {
        await connection.dropCollection('subcategories');
    }
    
    let wineCheck = await connection.db.listCollections({ name: 'wines' }).toArray();
    if (wineCheck.length) {
        await connection.dropCollection('wines');
    }

    let beerCheck = await connection.db.listCollections({ name: 'beers' }).toArray();
    if (beerCheck.length) {
        await connection.dropCollection('beers');
    }

    console.info('Data refreshed!');
    process.exit(0);
});