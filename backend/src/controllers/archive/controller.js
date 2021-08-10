const express = require('express');
const createError = require('http-errors');

const archiveService = require('./service');

// Create a new archive.
exports.create = (req, res, next) => {
    const { last_name, first_name, email } = req.body;
    if (!last_name || !first_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newArchive = {
        firstName: first_name,
        lastName: last_name,
        email: email
    };

    return archiveService.create(newArchive)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return archiveService.findAll()
        .then(people => {
            res.json(people);
        });
};

exports.findOne = (req, res, next) => {
    return archiveService.findOne(req.params.id)
        .then(archive => {
            if (!archive) {
                return next(new createError.NotFound("Archive is not found"));
            }
            return res.json(archive);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { first_name, last_name, email } = req.body;
    if (!last_name || !first_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        firstName: first_name,
        lastName: last_name,
        email: email
    };
    return archiveService.update(req.params.id, update)
        .then(archive => {
            res.json(archive);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return archiveService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
