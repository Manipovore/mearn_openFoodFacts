const Products = require('../models/productModel');

exports.createProduct = (req, res, next) => {
    const products = new Products({
        product_name: req.body.product_name,
        code: req.body.code,
        image_url: req.body.image_url
    });
    products.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.modifyProduct = (req, res, next) => {
    const products = new Products({
        product_name: req.body.product_name,
        code: req.body.code,
        image_url: req.body.image_url
    });
    Products.updateOne({ _id: req.params.id }, products).then(
        () => {
            res.status(201).json({
                message: 'Thing updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.deleteProduct = (req, res, next) => {
    Products.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};