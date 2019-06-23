const express = require('express');
const router = express.Router();

const PagesController=require('../controllers/PagesController');
const UsersController=require('../controllers/UsersController');


/* GET home page. */
router.get('/',PagesController.home);

router.get('/users',UsersController.showUsers);
router.get('/user/delete/:userId',UsersController.deleteUser);
router.get('/user/edit/:userId',UsersController.showUser);
router.post('/user',UsersController.saveUser);
router.post('/user/edit/:userId',UsersController.editUser);


module.exports = router;
