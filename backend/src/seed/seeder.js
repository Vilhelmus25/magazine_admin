const fsp = require('fs').promises;
const Subscriber = require('../models/subscriber.model');
// const Race = require('../models/race.model');
// const Customer = require('../models/customer.model');
// const Service = require('../models/service.model');

const seedCollection = async (model, fileName) => {
    try {
        const exists = await model.find().count();
        if (!exists) {
            throw new Error();
        }
    } catch (e) {
        const source = await fsp.readFile(
            `./src/seed/${fileName}.json`,
            'utf8'
        );
        const list = JSON.parse(source);
        if (model && model.insertMany) {
            await model.insertMany(list, { limit: 100 });
        }
    }
};

(async () => {

    try {
        await Subscriber.db.dropCollection('subscriber');
    } catch (e) {
        console.log('SUBSCRIBER NOT FOUND');
    }

    seedCollection(Subscriber, 'subscriber');
    // seedCollection(Customer, 'customers');
    // seedCollection(Race, 'races');
    // seedCollection(Service, 'services');
})();