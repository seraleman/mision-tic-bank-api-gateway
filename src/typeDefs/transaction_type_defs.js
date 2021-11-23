const { gql } = require('apollo-server');

const transactionTypeDefs = gql`
    type Transaction {
        id: String!
        usernameOrigin: String!
        usernameDestinity: String!
        value: Int!
        date: String!
    }

    input TransactionInput {
        usernameOrigin: String!
        usernameDestinity: String!
        value: Int!
    }

    extend type Query {
        transactionByUsername(username: String!): [Transaction]
    }

    extend type Mutation {
        createTransaction(transaction: TransactionInput!): Transaction
    }
`;

module.exports = transactionTypeDefs;