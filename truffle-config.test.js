module.exports = {
    networks: {},
    compilers: {
        solc: {
            version: 'pragma',
            settings: {
                optimizer: {
                    enabled: true, // Default: false
                    runs: 200, // Default: 200
                },
            },
        },
    },
}
