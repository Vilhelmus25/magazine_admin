const express = require('express');
const createError = require('http-errors');

const subscriberService = require('./service');

// Create a new subscriber.
exports.create = (req, res, next) => {
    const { last_name, first_name, email } = req.body;
    if (!last_name || !first_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newSubscriber = {
        firstName: first_name,
        lastName: last_name,
        email: email
    };

    return subscriberService.create(newSubscriber)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return subscriberService.findAll()
        .then(people => {
            res.json(people);
        });
};

exports.findOne = (req, res, next) => {
    return subscriberService.findOne(req.params.id)
        .then(subscriber => {
            if (!subscriber) {
                return next(new createError.NotFound("Subscriber is not found"));
            }
            return res.json(subscriber);
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
    return subscriberService.update(req.params.id, update)
        .then(subscriber => {
            res.json(subscriber);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return subscriberService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
