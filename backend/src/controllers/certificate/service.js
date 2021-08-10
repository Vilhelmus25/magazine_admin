const Certificate = require('../../models/certificate.model');

exports.create = certificateData => {
    const certificate = new Certificate(certificateData);
    return certificate.save();
};

exports.findAll = () => Certificate.find().populate('posts');

exports.findOne = id => Certificate.findById(id).populate('posts');

exports.update = (id, updateData) => Certificate.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => Certificate.findByIdAndRemove(id);
