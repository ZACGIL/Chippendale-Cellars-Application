const connection = require('../config/connection');
const { Category, Subcategory } = require('../models');
const { basicCategories, basicWineSubcategories, basicBeerSubcategories } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    Category.find({})
        .exec()
        .then(async collection => {
            //only insert these values into an empty database
            if (collection.length === 0) {
                const results = await Category.insertMany(basicCategories);
                return results;
            }
            return console.log('Categories is already populated.');
        })
        .then((results) => {
            if (results) {
                console.log('Categories inserted. 🌱');
            }
        })
        .catch(err => console.log(err));

    setTimeout(() => {
        Subcategory.find({})
            .exec()
            .then(async collection => {
                if (collection.length === 0) {
                    //this will dynamically allocate any wine subcategories to the wine category
                    const categories = await Category.find({ name: 'Wine' });
                    //add wine category _id to all wine subcategories with key value of 'category'
                    basicWineSubcategories.forEach(sub => { sub.category = categories[0]._id });
                    return basicWineSubcategories;
                }
                return console.log('Subcategories is already populated.');
            })
            .then(async (wineSubs) => {
                if (wineSubs) {
                    const results = await Subcategory.insertMany(wineSubs);
                    return results;
                }
            })
            .then(async collection => {
                //if the collection is the length of the previously added wines then continue
                if (collection.length === basicWineSubcategories.length) {
                    //perform the same for beer
                    const categories = await Category.find({ name: 'Beer' });
                    basicBeerSubcategories.forEach(sub => { sub.category = categories[0]._id });
                    return basicBeerSubcategories;
                }
            })
            .then(async (beerSubs) => {
                if (beerSubs) {
                    const results = await Subcategory.insertMany(beerSubs);
                    return results;
                }
            })
            .then((results) => {
                if (results) {
                    console.log('Subcategories inserted. 🌱');
                }
                setTimeout(() => process.exit(0), 3000);
            }
            )
            .catch(err => console.log(err));
    }, 3000);
});