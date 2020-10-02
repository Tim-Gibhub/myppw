var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    S1:'I believe by knowing what I value, I truly know what I want.' ,    
    l1:'active',
    l2: '',
    l3: '',
    l4: '',
    l5: ''
  });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About Me',
    S1:'',
    l1: '',
    l2: 'active',
    l3: '',
    l4: '',
    l5: ''  });
});
/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('products', { 
    title: 'Products', 
    S1:'',
    l1: '',
    l2: '',
    l3: 'active',
    l4: '',
    l5: ''   });
});
/* GET  services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { 
    title: 'services',
    S1:'',
    l1: '',
    l2: '',
    l3: '',
    l4: 'active',
    l5: ''  });
});
/* GET  Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact',
    S1:'',
    l1: '',
    l2: '',
    l3: '',
    l4: '',
    l5: 'active'  });
});
module.exports = router;
