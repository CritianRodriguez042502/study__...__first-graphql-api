const resolvers = {
  Query: {
    allCharacters: () =>
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => data.results),
    CharacterDetails: (parent, args) =>
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.results.length; i++) {
            if (data.results[i].id === parseInt(args.id)) {
              console.log(data.results[i]);
              return data.results[i];
            }
          }
        }),
  },
};

module.exports = { resolvers };
