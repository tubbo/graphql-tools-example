const { loadSchemaSync, UrlLoader } = require('graphql-tools')

loadSchemaSync('https://swapi-graphql.netlify.app/.netlify/functions/index', {
  loaders: [
    new UrlLoader(),
  ],
})
