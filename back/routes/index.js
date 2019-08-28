var express = require('express');
var router = express.Router();

const productModifyCtrl = require('../controllers/productModifyController');
const productReadCtrl = require('../controllers/productReadController');

router.get('/', function (req, res, next) {
  res.json('Api home')
})
router.get('/products/:id?', productReadCtrl.getAllProductsByLimitAndSkip)
//router.get('/product/:id', productReadCtrl.getOneById)
router.get('/product/:name', productReadCtrl.getOneProduct)
router.get('/count', productReadCtrl.getCount)
router.get('/count/:key/:val', productReadCtrl.aggregateCountBySection)

router.get('/packaging/:name/:id?', productReadCtrl.getPackaging)
router.get('/brands/:name/:id?', productReadCtrl.getBrands)
router.get('/labels/:name/:id?', productReadCtrl.getLabels)
router.get('/manufacturing_places/:name/:id?', productReadCtrl.getManufacturing)
router.get('/origins/:countries/:id?', productReadCtrl.getOrigins)

router.get('/categories/:name?', productReadCtrl.getCategories)


module.exports = router;
