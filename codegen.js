module.exports = {
    schema: [
        {
            'https://cool-messenger.herokuapp.com/v1/graphql': {
                headers: {
                    Authorization: 'Bearer ' + process.env.AUTH_TOKEN,
                },
            },
        },
    ],
    documents: ['./src/**/*.tsx', './src/**/*.ts'],
    overwrite: true,
    generates: {
        './src/generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
                'typescript-resolvers'
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
    },
};