//? Run script for testing database, not to be used in production
const connection = require('../config/connection');
const { User, Wine, Beer, Product, Category, Subcategory } = require('../models');
const {
    testUsers, beerFirst, beerSecond, description, beerCountries, packSizes, beerVolumes, beerAlcohol,
    wineFirst, wineSecond, varietal, wineVolumes, wineCountries, wineAlcohol,
    getRandomNumberFromRange, getRandomArrItem, getRandomName,
} = require('./testdata');
const { basicWineSubcategories, basicBeerSubcategories } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    const users = testUsers;
    const wines = [];
    const beers = [];

    const winesToGenerate = 50;
    const beersToGenerate = 60;

    //randomly generate wines and beers
    Wine.find({})
        .exec()
        .then(async collection => {
            //only insert these values into a full database
            if (collection.length !== winesToGenerate) {
                const categories = await Category.find({ name: 'Wine' });
                return categories[0]._id;
            }
            return console.log('Categories isnt populated.');
        })
        .then(async id => {
            const wineId = id;
            const subcategories = await Subcategory.find({ category: id });
            const ids = subcategories.map(e => e._id);
            return { wineId, ids };
        })
        .then(data => {
            const { wineId, ids } = data;
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
                const subcat = [getRandomArrItem(ids)];

                wines.push({
                    productInformation: {
                        name: name,
                        imagePath: image,
                        price: price,
                        quantity: quantity,
                        category: wineId,
                        subcategory: subcat
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
            console.table(data);
            console.log('Wines have been seeded. 🌱');
            await Wine.insertMany(data);
        })
        .catch(err => console.log(err));

    Beer.find({})
        .exec()
        .then(async collection => {
            if (collection.length !== beersToGenerate) {
                const categories = await Category.find({ name: 'Beer' });
                return categories[0]._id;
            }
            return console.log('Categories isnt populated.');
        })
        .then(async id => {
            const beerId = id;
            const subcategories = await Subcategory.find({ category: id });
            const ids = subcategories.map(e => e._id);
            return { beerId, ids };
        })
        .then(data => {
            const { beerId, ids } = data;
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
                const subcat = [getRandomArrItem(ids)];

                beers.push({
                    productInformation: {
                        name: name,
                        imagePath: image,
                        price: price,
                        quantity: quantity,
                        category: beerId,
                        subcategory: subcat
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

    await User.insertMany(users);
    console.table(users);
    console.info('User seeding complete! 🌱');

    //update products
    setTimeout(() => {
        Wine.find({})
            .exec()
            .then(async collection => {
                //if our collections have been generated
                if (collection.length === winesToGenerate) {
                    const wines = await Wine.find({});
                    const productInfo = wines.flatMap(e => e.productInformation);
                    return productInfo;
                }
                return console.log('Wine isnt populated.');
            })
            .then(async data => {
                if (data) {
                    console.log('Wine added to products. ✅')
                    await Product.insertMany(data);
                }
            })
            .catch(err => console.log(err));

        Beer.find({})
            .exec()
            .then(async collection => {
                //if our collections have been generated
                if (collection.length === beersToGenerate) {
                    const beers = await Beer.find({});
                    const productInfo = beers.flatMap(e => e.productInformation);
                    return productInfo;
                }
                return console.log('Beer isnt populated.');
            })
            .then(async data => {
                if (data) {
                    console.log('Beer added to products. ✅')
                    await Product.insertMany(data);
                }
            })
    }, 2000);

    //update categories
    setTimeout(() => {
        Wine.find({})
            .exec()
            .then(async collection => {
                //if our collections have been generated
                if (collection.length === winesToGenerate) {
                    const wines = await Wine.find({});
                    const productInfo = wines.flatMap(e => e.productInformation);
                    return productInfo;
                }
                return console.log('Wine isnt populated.');
            })
            .then(async wines => {
                if (wines) {
                    console.log('Wine category updated. ✅')
                    await Category.findOneAndUpdate(
                        { name: 'Wine' },
                        { $addToSet: { products: wines } },
                        { new: true }
                    );
                }
            })
            .catch(err => console.log(err));

        Beer.find({})
            .exec()
            .then(async collection => {
                if (collection.length === beersToGenerate) {
                    const beers = await Beer.find({});
                    const productInfo = beers.flatMap(e => e.productInformation);
                    return productInfo;
                }
                return console.log('Beer isnt populated.');
            })
            .then(async beers => {
                if (beers) {
                    await Category.findOneAndUpdate(
                        { name: 'Beer' },
                        { $addToSet: { products: beers } },
                        { new: true }
                    );
                    console.log('Beer category updated. ✅')
                }
            })
            .catch(err => console.log(err));
    }, 3000);

    //update subcategories
    setTimeout(() => {
        for (let i = 0; i < basicWineSubcategories.length; i++) {
            Wine.find({})
                .exec()
                .then(async collection => {
                    //if our collections have been generated
                    if (collection.length === winesToGenerate) {
                        const sub = await Subcategory.find({ name: basicWineSubcategories[i].name });
                        return sub[0];
                    }
                    return console.log('Wine isnt populated.');
                })
                .then(async ({ _id }) => {
                    //if our collections have been generated
                    if (_id) {
                        const productsToAdd = await Product.find({ subcategory: _id });
                        return { _id, productsToAdd }
                    }
                })
                .then(async ({ _id, productsToAdd }) => {
                    //if our collections have been generated
                    if (_id) {
                        const sub = await Subcategory.findOneAndUpdate(
                            { _id: _id },
                            { $addToSet: { products: productsToAdd } },
                            { new: true }
                        );
                    }
                })
                .catch(err => console.log(err));
        }
        console.log('Wine subcategories updated. ✅');
        for (let i = 0; i < basicBeerSubcategories.length; i++) {
            Beer.find({})
                .exec()
                .then(async collection => {
                    //if our collections have been generated
                    if (collection.length === beersToGenerate) {
                        const sub = await Subcategory.find({ name: basicBeerSubcategories[i].name });
                        return sub[0];
                    }
                    return console.log('Wine isnt populated.');
                })
                .then(async ({ _id }) => {
                    //if our collections have been generated
                    if (_id) {
                        const productsToAdd = await Product.find({ subcategory: _id });
                        return { _id, productsToAdd }
                    }
                })
                .then(async ({ _id, productsToAdd }) => {
                    //if our collections have been generated
                    if (_id) {
                        const sub = await Subcategory.findOneAndUpdate(
                            { _id: _id },
                            { $addToSet: { products: productsToAdd } },
                            { new: true }
                        );
                    }
                })
                .catch(err => console.log(err));
        }
        console.log('Beer subcategories updated. ✅');
    }, 4000);

    //close CLI
    setTimeout(() =>
        process.exit(0),
        5000)
});