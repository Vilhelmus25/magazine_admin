const Archive = require('../../models/archive.model');

exports.create = archiveData => {
    const archive = new Archive(archiveData);
    return archive.save();
};

exports.findAll = () => Archive.find().populate('posts');

exports.findOne = id => Archive.findById(id).populate('posts');

exports.update = (id, updateData) => Archive.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => Archive.findByIdAndRemove(id);
