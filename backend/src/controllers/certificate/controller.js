const express = require('express');
const createError = require('http-errors');

const certificateService = require('./service');

// Create a new certificate.
exports.create = (req, res, next) => {
    const { last_name, first_name, email } = req.body;
    if (!last_name || !first_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newCertificate = {
        firstName: first_name,
        lastName: last_name,
        email: email
    };

    return certificateService.create(newCertificate)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return certificateService.findAll()
        .then(people => {
            res.json(people);
        });
};

exports.findOne = (req, res, next) => {
    return certificateService.findOne(req.params.id)
        .then(certificate => {
            if (!certificate) {
                return next(new createError.NotFound("Certificate is not found"));
            }
            return res.json(certificate);
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
    return certificateService.update(req.params.id, update)
        .then(certificate => {
            res.json(certificate);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return certificateService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
