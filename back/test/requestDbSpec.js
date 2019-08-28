var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;
var assert = chai.assert;
chai.expect();

var mongoose = require('mongoose');
const config = require('../config/config');
const { db: { host, port, name } } = config;
var SchemaFoodProducts = require('../config/schemaFoodProducts');
var FoodsModel = mongoose.model('products', SchemaFoodProducts);
var requestDb = require('../model/requestDb');
requestDb = new requestDb(FoodsModel, host, port, name);

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('RequestDb', function () {
    describe('#InitializeDb', function () {
        it('should return an object after init object', function () {
            expect(requestDb).to.be.a('object', '|| l\'objet n\'est pas initialisé, problème potentiel de config/config.js ||');
        });
    });
    describe('#RequestCount', function () {
        it('should return data count typeof number', function () {
            return expect(requestDb.totalData()).to.eventually.a('number');
        });
    });

    describe('#RequestFind', function () {
        it('should return array of data', function () {
            return expect(requestDb.find({ product_name: 'cheese curls' })).to.eventually.a('array');
        });
    });

    describe('#RequestFindReturnObjectOfDataArray', function () {
        it('should return object of data array', function () {
            return requestDb.find({ product_name: 'cheese curls' })
                .then(function (m) { expect(m[0]).to.be.a('object'); })
                .catch(function (m) { throw new Error('-> do not return an object from the data array'); })
                ;
        });
    });

    describe('#Request Find Return key value', function () {
        it('should return obkect of data', function () {
            return requestDb.find({ product_name: 'cheese curls' })
                .then(function (m) { expect(m[0].product_name).to.be.equals('cheese curls'); })
                .catch(function (m) { throw new Error('-> product_name is not equals to his key '); })
                ;
        });
    });

});
