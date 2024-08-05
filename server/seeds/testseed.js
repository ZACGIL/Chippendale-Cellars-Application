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
    
    const winesToGenerate = 50;
    const beersToGenerate = 40;

    //use category to find matching id with category id in subcategory and return array of matching subcategory ids to use, and get random item from array
    await Subcategory.find({}).then((result)=>console.log(result));
    //also update subcategories and categories with seed data dynamically
    //complete typedefs and resolvers
    setTimeout(() => {
        Category.find({})
            .exec()
            .then(async collection => {
                //only insert these values into a full database
                if (collection.length !== winesToGenerate) {
                    const categories = await Category.find({ name: 'Wine' });
                    return categories[0]._id;
                }
                return console.log('Categories isnt populated.');
            })
            .then(id => {
                for (let i = 0; i < winesToGenerate; i++) {
                    const name = getRandomName(wineFirst, wineSecond);
                    const image = '';
                    const price = getRandomNumberFromRange(10, 110);
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
                if (collection.length !== beersToGenerate) {
                    const categories = await Category.find({ name: 'Beer' });
                    return categories[0]._id;
                }
                return console.log('Categories isnt populated.');
            })
            .then(id => {
                for (let i = 0; i < beersToGenerate; i++) {
                    const name = getRandomName(beerFirst, beerSecond);
                    const image = '';
                    const price = getRandomNumberFromRange(15, 60);
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
            .then(() => 
                process.exit(0) 
            )
            .catch(err => console.log(err));
    }, 1000);

    await User.insertMany(users);
    console.table(users);
    console.info('User seeding complete! 🌱');
});