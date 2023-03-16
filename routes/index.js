var express = require('express');
var router = express.Router();

// require controllers:
const hotelController = require('../controllers/hotelController');

/* GET home page. */
router.get('/', hotelController.homePage);

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/all', hotelController.listAllHotels);

// router.get('/all', function(req, res) {
//   res.render('all_hotels', { title: 'All Hotels' });
// });

// router.get('/all/:name', function(req, res) {
//   const name = req.params.name;
//   res.render('all_hotels', { title: 'All Hotels', name });
// });

router.get('/sign-up', hotelController.signUp, hotelController.logIn);
router.get('log-in', hotelController.logIn);

// ADMIN Routes:
router.get('/admin', hotelController.adminPage);
router.get('/admin/add', hotelController.createHotelGet);
router.post('/admin/add', hotelController.createHotelPost);

module.exports = router;
