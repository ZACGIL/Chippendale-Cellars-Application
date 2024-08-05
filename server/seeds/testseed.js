//? Run script for testing database, not to be used in production
const connection = require('../config/connection');
const { User, Wine, Beer, Category, Subcategory } = require('../models');
const {
    testUsers, beerFirst, beerSecond, description, beerCountries, packSizes, beerVolumes, beerAlcohol,
    wineFirst, wineSecond, varietal, wineVolumes, wineCountries, wineAlcohol,
    getRandomNumberFromRange, getRandomArrItem, getRandomName,
} = require('./testdata');

connection.on('error', (err) => err);

connection.once('open', async () => {
    const users = testUsers;
    const wines = [];
    const beers = [];

    setTimeout(() => {
        Category.find({})
            .exec()
            .then(async collection => {
                //only insert these values into a full database
                if (collection.length !== 0) {
                    const categories = await Category.find({ name: 'Wine' });
                    return categories[0]._id;
                }
                return console.log('Categories isnt populated.');
            })
            .then(id => {
                for (let i = 0; i < 50; i++) {
                    const name = getRandomName(wineFirst, wineSecond);
                    const image = '';
                    const price = getRandomNumberFromRange(1, 110);
                    const quantity = getRandomNumberFromRange(0, 60);
                    const desc = getRandomArrItem(description);
                    const vari = getRandomArrItem(varietal);
                    const country = getRandomArrItem(wineCountries);
                    const volume = getRandomArrItem(wineVolumes);
                    const alcoholContent = getRandomArrItem(wineAlcohol);

                    wines.push({
                        productInformation: {
                            name: name,
                            imagePath: image,
                            price: price,
                            quantity: quantity,
                            category: id
                        },
                        description: desc,
                        varietal: vari,
                        country: country,
                        volume: volume,
                        alcoholContent: alcoholContent
                    });
                }
                return wines;
            })
            .then(async data => {
                await Wine.insertMany(data);
                console.table(data);
                console.log('Wines have been seeded. 🌱');
            })
            .catch(err => console.log(err));

        Category.find({})
            .exec()
            .then(async collection => {
                if (collection.length !== 0) {
                    const categories = await Category.find({ name: 'Beer' });
                    return categories[0]._id;
                }
                return console.log('Categories isnt populated.');
            })
            .then(id => {
                for (let i = 0; i < 40; i++) {
                    const name = getRandomName(beerFirst, beerSecond);
                    const image = '';
                    const price = getRandomNumberFromRange(1, 60);
                    const quantity = getRandomNumberFromRange(0, 60);
                    const desc = getRandomArrItem(description);
                    const country = getRandomArrItem(beerCountries);
                    const size = getRandomArrItem(packSizes);
                    const volume = getRandomArrItem(beerVolumes);
                    const alcoholContent = getRandomArrItem(beerAlcohol);

                    beers.push({
                        productInformation: {
                            name: name,
                            imagePath: image,
                            price: price,
                            quantity: quantity,
                            category: id
                        },
                        description: desc,
                        country: country,
                        packSize: size,
                        volume: volume,
                        alcoholContent: alcoholContent
                    });
                }
                return beers;
            })
            .then(async data => {
                await Beer.insertMany(data);
                console.table(data);
                console.log('Beers have been seeded. 🌱');
            })
            .catch(err => console.log(err));
    }, 3000);

    await User.insertMany(users);
    console.table(users);
    console.info('User seeding complete! 🌱');
});