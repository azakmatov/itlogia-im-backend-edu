const config = {
    secret: 'd1UCyUDKC0TiWhDbs6U5QWiez6',
    env: process.env.ENV,
    port: 3000,
    db: {
        dbUrl: 'mongodb://mongo:27017',
        dbName: 'im',
        dbHost: 'mongo',
        dbPort: 27017,
    },
    deliveryCost: 10,
    deliveryTypes: {delivery: 'delivery', self: 'self'},
    paymentTypes: {cashToCourier: 'cashToCourier', cardOnline: 'cardOnline', cardToCourier: 'cardToCourier'},
    statuses: {new: 'new', pending: 'pending', delivery: 'delivery', cancelled: 'cancelled', success: 'success'}
};

module.exports = config;
