//? Run script for testing database, not to be used in production
let getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
let getRandomNumberFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomName = (name1, name2) =>
    `${getRandomArrItem(name1)} ${getRandomArrItem(name2)}`;

module.exports = {
    testUsers: [
        { username: 'test', email: 'test@email.com', password: 'test123' },
        { username: 'anothertest', email: 'anothertest@email.com', password: 'test1234' },
        { username: 'yetanothertest', email: 'yetanothertest@email.com', password: 'test12345' },
    ],
    beerFirst: [
        'Royal',
        'Soldier',
        'Great Eastern',
        'Northern',
        'Southern',
        'Eastern',
        'Western',
        'Great Star',
        '5 Pines',
        'Lord Henry',
        'Red Giant',
        'Tall Tree',
        'King John',
        'North Garden',
        'East River',
        'South City',
        'West Mountain',
        'Small Hill'
    ],
    beerSecond: [
        'Breweries',
        'Brewery',
        'Dry',
        'Superdry',
        'Premium',
        'Super Crisp',
        'Original',        
    ],
    description: [
        'This is an excellent description',
        'This is a good description',
        'This is a precise description',
    ],
    beerCountries: [
        'Australia',
        'US',
        'Belgium',
        'Netherlands',
        'Japan'
    ],
    packSizes: [
        6,
        16,
        24,
        30
    ],
    beerVolumes: [
        345,
        355,
        500
    ],
    beerAlcohol: [
        0,
        3,
        4,
        5,
        6
    ],
    wineFirst: [
        'Penfolds',
        'South',
        'Hunter',
        'Church',
        'Southern',
        'Clean & Bold',
        'Old World',
        'New World',
        'Great Star',
        'Southern Star',
        'Northbank',
        'Quiet Forest',
        'Small River',
        'Stonesmith',
        'Little Hill',
        'Three Churches'
    ],
    wineSecond: [
        'Winery',
        'Wineries',
        'Vineyards',
        'Estate',
        'Premium',
        'Vintage',
        'Chateau'     
    ],
    varietal: [
        'Chardonnay',
        'Pinot Noir',
        'Merlot',
        'Shiraz',
        'Pinot Grigio',
        'Riesling',
        'Rose',
        'Cabernet Sauvignon',
        'Sauvignon Blanc',
        'Chardonnay Pinot Noir',
        'Blend',
        'Tempranillo',
        'Grenache'
    ],
    wineVolumes: [
        375,
        750,
        1000,
    ],
    wineCountries: [
        'Spain',
        'Italy',
        'France',
        'Australia',
        'US',
        'Chile',
    ],
    wineAlcohol: [
        0,
        6,
        10,
        12,
        14,
        16,
    ],
    getRandomNumberFromRange,
    getRandomArrItem,
    getRandomName
};