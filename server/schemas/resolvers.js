const { User, Product, Wine, Beer, Category, Subcategory, Order } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
        latestWines: async () => {
            return Wine.find().sort({ _id: -1 }).limit(5);
        },
        beers: async () => {
            return Beer.find();
        },
        latestBeers: async () => {
            return Beer.find().sort({ _id: -1 }).limit(5);
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
            console.log(args)
            return Beer.findById(args);
        },
        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.products',
                    populate: 'category'
                });

                return user.orders.id(_id);
            }

            throw AuthenticationError;
        },
        checkout: async (parent, { _id }, context) => {
            const url = new URL(context.headers.referer).origin;
            await Order.create({ products: args.products.map(({ _id }) => _id) });
            const line_items = [];

            // eslint-disable-next-line no-restricted-syntax
            for (const product of args.products) {
                // Create a line item for each product
                line_items.push({
                    price_data: {
                        currency: 'aud',
                        product_data: {
                            name: product.name,
                            description: product.description,
                            images: [`${url}/images/${product.image}`]
                        },
                        unit_amount: product.price * 100,
                    },
                    quantity: product.purchaseQuantity,
                });
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`,
            });

            return { session: session.id };
        },
        product: async (parent, { _id, name }) => {
            if (_id) {
                const product = await Product.find({ _id: _id });
                return product;
            }
            else if (name) {
                const product = await Product.find({ name: name });
                return product;
            }
        },
        category: async (parent, { _id, name }) => {
            if (_id) {
                const category = await Category.find({ _id: _id });
                return category;
            } else if (name) {
                const category = await Category.find({ name: name });
                return category;
            }
        },
        subcategory: async (parent, { _id, name }) => {
            if (_id) {
                const subcategory = await Subcategory.find({ _id: _id });
                return subcategory;
            } else if (name) {
                const subcategory = await Subcategory.find({ name: name });
                return subcategory;
            }
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
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
        addOrder: async (parent, { products }, context) => {
            if (context.user) {
                const order = new Order({ products });

                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

                return order;
            }

            throw AuthenticationError;
        },
        addProduct: async (parent, { input }) => {
            const product = await Product.create(input);
            const updateCategory = await Category.findOneAndUpdate(
                { _id: product.category },
                { $addToSet: { products: product._id } },
                { new: true }
            );
            if (input.subcategory) {
                for (i = 0; i < product.subcategory.length; i++) {
                    const updateSubcategory = await Subcategory.findOneAndUpdate(
                        { _id: product.subcategory[i] },
                        { $addToSet: { products: product._id } },
                        { new: true }
                    );
                };
            };
            return product;
        },
        addWine: async (parent, { input }) => {
            try {
                const wine = await Wine.create(input);
                const info = wine.productInformation;

                const updateCategory = await Category.findOneAndUpdate(
                    { _id: info.category },
                    { $addToSet: { products: info._id } },
                    { new: true }
                );
                if (info.subcategory) {
                    for (i = 0; i < info.subcategory.length; i++) {
                        const updateSubcategory = await Subcategory.findOneAndUpdate(
                            { _id: info.subcategory[i] },
                            { $addToSet: { products: info._id } },
                            { new: true }
                        );
                    };
                };
                return wine;
            }
            catch (err) {
                console.log(err);
            }
        },
        updateWine: async (parent, { input }) => {
            try {
                const oldWine = await Wine.findOne({ _id: input._id });
                const oldInfo = oldWine.productInformation;
                if (input.productInformation) {
                    const info = input.productInformation
                    const updateWine = await Wine.findOneAndUpdate(
                        { _id: input._id },
                        {
                            $set: {
                                productInformation: {
                                    _id: oldInfo._id,
                                    name: oldInfo.name,
                                    imagePath: oldInfo.imagePath,
                                    price: info.price || oldInfo.price,
                                    quantity: info.quantity || oldInfo.quantity,
                                    category: oldInfo.category,
                                    subcategory: oldInfo.subcategory,
                                    createdAt: oldInfo.createdAt
                                }
                            }
                        },
                        { new: true }
                    );
                    return updateWine;
                }
            }
            catch (err) {
                console.log(err);
            }
        },
        removeWine: async (parent, { _id }) => {
            try {
                const wine = await Wine.findOne({ _id: _id });
                const info = wine.productInformation;

                const updateCategory = await Category.findOneAndUpdate(
                    { _id: info.category },
                    { $pull: { products: info._id } },
                    { new: true }
                );
                if (info.subcategory) {
                    for (i = 0; i < info.subcategory.length; i++) {
                        const updateSubcategory = await Subcategory.findOneAndUpdate(
                            { _id: info.subcategory[i] },
                            { $pull: { products: info._id } },
                            { new: true }
                        );
                    };
                };
                await Wine.findOneAndDelete({ _id: _id });
                return wine;
            }
            catch (err) {
                console.log(err);
            }
        },
        addBeer: async (parent, { input }) => {
            try {
                const beer = await Beer.create(input)
                //const product = await Product.create(wine.productInformation);
                const info = beer.productInformation;

                const updateCategory = await Category.findOneAndUpdate(
                    { _id: info.category },
                    { $addToSet: { products: info._id } },
                    { new: true }
                );
                if (info.subcategory) {
                    for (i = 0; i < info.subcategory.length; i++) {
                        const updateSubcategory = await Subcategory.findOneAndUpdate(
                            { _id: info.subcategory[i] },
                            { $addToSet: { products: info._id } },
                            { new: true }
                        );
                    };
                };
                return beer;
            }
            catch (err) {
                console.log(err);
            }
        },
    },
};

module.exports = resolvers;