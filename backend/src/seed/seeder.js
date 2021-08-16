const fsp = require('fs').promises;
const Subscriber = require('../models/subscriber.model');
const Colleague = require('../models/colleague.model');
const Certificate = require('../models/certificate.model');
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
    seedCollection(Colleague, 'colleague');
    seedCollection(Certificate, 'certificate');
    // seedCollection(Race, 'races');
    // seedCollection(Service, 'services');
})();