let express = require('express');
let router = express.Router();

let loginController = require('../controllers/login');

/* GET login page. */
router.get('/', loginController.Login);  

/* POST process login page. */

router.post('/', loginController.ProcessLogin);



module.exports = router;