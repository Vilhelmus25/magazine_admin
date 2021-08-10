const Subscriber = require('../../models/subscriber.model');

exports.create = subscriberData => {
    const subscriber = new Subscriber(subscriberData);
    return subscriber.save();
};

exports.findAll = () => Subscriber.find().populate('posts');

exports.findOne = id => Subscriber.findById(id).populate('posts');

exports.update = (id, updateData) => Subscriber.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => Subscriber.findByIdAndRemove(id);
