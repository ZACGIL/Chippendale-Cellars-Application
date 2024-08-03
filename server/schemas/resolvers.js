const { User, Product } = require('../models');
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
            throw new AuthenticationError('You need to be logged in!');
        },
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
                throw AuthentificationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthentificationError;
            }

            const token = signToken(user);

            return { token, user };
        },
    },
};

module.exports = resolvers;