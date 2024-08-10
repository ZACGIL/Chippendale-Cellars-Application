const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        orders: [Order]
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type Checkout {
        session: ID
    }

    type Category {
        _id: ID
        name: String
        products: [Product]!
        productsTotal: Int
    }
    
    type Subcategory {
        _id: ID
        category: ID
        name: String
        products: [Product]!
        productsTotal: Int
    }

    type Product {
        _id: ID
        name: String
        imagePath: String
        price: Float
        quantity: Int
        category: ID
        subcategory: [ID]
        createdAt: String
    }

    type Beer {
        _id: ID
        productInformation: Product
        description: String
        brewery: String
        country: String
        packSize: String
        volume: Int
        alcoholContent: Float
    }

    type Wine {
        _id: ID
        productInformation: Product
        description: String
        varietal: String
        producer: String
        region: String
        country: String
        vintage: String
        volume: Int
        natural: Boolean
        alcoholContent: Float
    }    

    input ProductInput {
        _id: ID
        name: String
        imagePath: String
        price: Float
        quantity: Int
        category: ID
        subcategory: [ID]
    }

    input AddProductInput {
        _id: ID
        name: String!
        imagePath: String
        price: Float!
        quantity: Int
        category: ID!
        subcategory: [ID]
    }

    input WineInput {
        _id: ID
        productInformation: ProductInput
        description: String
        varietal: String
        producer: String
        region: String
        country: String
        vintage: String
        volume: Int
        natural: Boolean
        alcoholContent: Float
    }

    input BeerInput {
        _id: ID
        productInformation: ProductInput
        description: String
        brewery: String
        country: String
        packSize: Int
        volume: Int
        alcoholContent: Float
    }

    type Auth {
        token: ID!
        user: User 
    }

    type Query {
        users: [User]
        me: User
        order(_id: ID!): Order
        checkout(products: [ProductInput]): Checkout

        products: [Product]
        product(_id: ID, name: String): [Product]

        wines: [Wine]
        wine(_id: ID!): Wine
        latestWines: [Wine]

        beers: [Beer]
        beer(_id: ID!): Beer
        latestBeers: [Beer]

        categories: [Category]
        category(_id: ID, name: String): [Category]

        subcategories: [Subcategory]
        subcategory(_id: ID, name: String): [Subcategory]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        loginUser(email: String!, password: String!): Auth
        addOrder(products: [ID]!): Order
        
        addProduct(input: AddProductInput!): Product

        addWine(input: WineInput!): Wine
        updateWine(input: WineInput!): Wine
        removeWine(_id: ID!): Category

        addBeer(input: BeerInput!): Beer
    }
`   

// addOrder(products: [ID]!): Order
// removeOrder(_id: ID!): Order
// updateUser
// removeUser

// updateWine
// removeWine

// addBeer
// updateBeer
// removeBeer

// addCategory
// updateCategory

// addSubcategory
// updateSubcategory

module.exports = typeDefs;