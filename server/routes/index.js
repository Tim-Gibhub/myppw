let express = require('express');
let router = express.Router();


let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.DisplayHomePage);

/* GET home page. */
router.get('/home', indexController.DisplayHomePage);

/* GET Products page. */
router.get('/products', indexController.DisplayProductsPage);

/* GET Services page. */
router.get('/services', indexController.DisplayServicesPage);

/* GET About page. */
router.get('/about', indexController.DisplayAboutPage);

/* GET Contact page. */
router.get('/contact', indexController.DisplayContactPage);


module.exports = router;
