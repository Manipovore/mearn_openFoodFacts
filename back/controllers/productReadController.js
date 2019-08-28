const config = require('../config/config');
const { db: { host, port, name } } = config;

const Product = require('../models/productModel');
var mongoose = require('mongoose');
mongoose.connect(`mongodb://${host}:${port}/${name}`, { useNewUrlParser: true });
const Products = mongoose.model('products', Product);

function findOne(res, val) {
    Products.findOne({ code: val }).then(
        (results) => {
            res.json(results);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

function findAllByLimitAndSkip(res, limit, skip, match) {
    console.log(limit, skip, match)
    Products.find(match, {}, {
        limit: parseInt(limit), skip: parseInt(skip * limit), sort: { created_datetime: 1 }
    }).then(
        (results) => {
            res.status(200).json(results);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

function count(res) {
    Products.estimatedDocumentCount().then(
        (results) => {
            res.status(200).json(results);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

function aggregateCount(res, key, val) {
    Products.aggregate([
        { $match: { [key]: val } },
        { $group: { _id: null, total: { $sum: 1 } } }
    ]).then(
        (results) => {
            res.status(200).json(results);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}


function aggregate(res, key, val) {
    Products.aggregate([
        { $match: { [key]: val } },
        { $group: { _id: null, total: { $sum: 1 } } }
    ]).then(
        (results) => {
            res.status(200).json(results);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

function distinct(res, name) {
    Products.distinct(name).then(
        (results) => {
            res.status(200).json(results);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

exports.getOneProduct = (req, res, next) => {
    findOne(res, req.params.name)
};

exports.getCount = (req, res, next) => {
    count(res);
};

exports.aggregateCountBySection = (req, res, next) => {
    aggregateCount(res, req.params.key, req.params.val);
};

exports.aggregateCountBySection = (req, res, next) => {
    aggregate(res, req.params.key, req.params.val);
};

exports.getAllProductsByLimitAndSkip = (req, res, next) => {
    findAllByLimitAndSkip(res, 10, req.params.id)
};

exports.getPackaging = (req, res, next) => {
    findAllByLimitAndSkip(res, 10, req.params.id, { packaging_tags: req.params.name })
}

exports.getBrands = (req, res, next) => {
    findAllByLimitAndSkip(res, 10, req.params.id, { brands: req.params.name })
}

exports.getLabels = (req, res, next) => {
    findAllByLimitAndSkip(res, 10, req.params.id, { labels_fr: req.params.name })
}

exports.getManufacturing = (req, res, next) => {
    findAllByLimitAndSkip(res, 10, req.params.id, { manufacturing_places: req.params.name })
}

exports.getOrigins = (req, res, next) => {
    findAllByLimitAndSkip(res, 10, req.params.id, { origins: req.params.countries })
}

exports.getCategories = (req, res, next) => {
    console.log(req.params.name)
    distinct(res, req.params.name)
}