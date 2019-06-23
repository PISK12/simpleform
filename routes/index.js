const express = require('express');
const router = express.Router();

const PagesController=require('../controllers/PagesController');
const UsersController=require('../controllers/UsersController');


/* GET home page. */
router.get('/',PagesController.home);

router.post('/users',UsersController.saveUser);
router.get('/users',UsersController.showUsers);

module.exports = router;
