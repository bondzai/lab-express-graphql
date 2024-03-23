import express, { Application } from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: (): string => 'Hello, world!',
    },
};

async function startApolloServer(): Promise<void> {
    const app: Application = express();
    const server: ApolloServer = new ApolloServer({ typeDefs, resolvers });

    await server.start();

    server.applyMiddleware({ app });

    const PORT: number = parseInt(process.env.PORT as string, 10) || 4000;

    app.listen(PORT, () => {
        console.log(
            `Server is running on http://localhost:${PORT}${server.graphqlPath}`,
        );
    });
}

startApolloServer();
