const { gql } = require("apollo-server");

const typeDefs = gql`
  type Character {
    id: ID
    name: String
    status: String
    especies: String
    gender: String
    url : String
  }

  type Query {
    allCharacters: [Character]
    CharacterDetails(id : ID!): Character
  }
`;

module.exports = { typeDefs };
