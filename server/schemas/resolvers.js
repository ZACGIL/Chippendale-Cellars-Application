const { User, Product, Wine, Beer, Category, Subcategory, Order } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
        },
        products: async () => {
            return Product.find();
        },
        wines: async () => {
            return Wine.find();
        },
        beers: async () => {
            return Beer.find();
        },
        categories: async () => {
            return Category.find();
        },
        subcategories: async () => {
            return Subcategory.find();
        },
        wine: async (parent, args) => {
            return Wine.findById(args);
        },
        beer: async (parent, args) => {
            return Beer.findById(args);
        },
        order: async (parent, args) => {
            return Order.findById(args);
        },
        checkout: async (parent, args) => {
            //Stripe logic here
            return console.log('Stripe logic')
        },
        product: async (parent, { input: { _id, name }}) => {
            if(_id) { 
                const product = await Product.find({ _id: _id });
                return product;
            }
            else if(name) {
                const product = await Product.find({ name: name });
                return product;
            }
        },
        category: async (parent, { _id, name }) => {
            if(_id) {
                const category = await Category.find({ _id: _id });
                return category;
            }else if(name) {
                const category = await Category.find({ name: name });
                return category;
            }
        },
        subcategory: async (parent, { _id, name }) => {
            if(_id) {
                const subcategory = await Subcategory.find({ _id: _id });
                return subcategory;
            }else if(name) {
                const subcategory = await Subcategory.find({ name: name });
                return subcategory;
            }
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            user = await User.create({ username, email, password });
            token = signToken(user);
            return { token, user };
        },
    
        loginUser: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
    },
};

module.exports = resolvers;