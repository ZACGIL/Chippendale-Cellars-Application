const basicCategories = [
    { name: 'Wine'},
    { name: 'Beer'},
    { name:'Spirit'},
    { name: 'Pre-Mixed'},
    { name: 'Cider'},
    { name: 'Gift'},
    { name: 'Mixer'},
    { name: 'Other'}
];

const basicWineSubcategories = [
    { name: 'Cask'},
    { name: 'Natural'},
    { name: 'Non Alcoholic'},
    { name: 'Organic'},
    { name: 'White'},
    { name: 'Red'},
    { name: 'Rose'},
    { name: 'Sparkling'},
];

const basicBeerSubcategories = [
    { name: 'Ale'},
    { name: 'Amber Ale'},
    { name: 'Dark'},
    { name: 'Draught'},
    { name: 'Ginger'},
    { name: 'Hazy IPA'},
    { name: 'Hazy Pale Ale'},
    { name: 'IPA'},
    { name: 'Lager'},
    { name: 'Light'},
    { name: 'Low Carb'},
    { name: 'Mid Strength'},
    { name: 'Non Alcoholic'},
    { name: 'Pacific Ale'},
    { name: 'Pale Ale'},
    { name: 'Red Ale'},
    { name: 'Session Ale'},
    { name: 'Session IPA'},
    { name: 'Stout'},
    { name: 'Summer Ale'},
    { name: 'Tropical Pale Ale'},
    { name: 'XPA'}
];

const basicSubcategories = basicWineSubcategories.concat(basicBeerSubcategories);

module.exports = { basicCategories, basicSubcategories, basicWineSubcategories, basicBeerSubcategories };