const config = {
    app: {
        environnement: 'DEV',
        port: 9000
    },
    db: {
        host: 'localhost',
        port: '27017',
        name: 'off'
    },
    mongoCollection: {
        name: 'products'
    },

}

module.exports = config;