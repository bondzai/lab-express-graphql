import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const typeDefs = gql`
    type Query {
        hello: String
    }
`

const resolvers = {
    Query: {
        hello: () => 'Hello, world!',
    },
}

const app = express()

async function startApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers })

    await server.start()

    server.applyMiddleware({ app })

    const PORT = process.env.PORT || 4000

    app.listen(PORT, () => {
        console.log(
            `Server is running on http://localhost:${PORT}${server.graphqlPath}`,
        )
    })
}

startApolloServer()
