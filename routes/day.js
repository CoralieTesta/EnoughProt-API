const express = require('express');
const router = express.Router()
const auth = require('../middleware/auth');

const dayCtrl = require('../controllers/day'); 

router.post('/create/', auth, dayCtrl.create);
router.get('/specificDay/:email/:day/:month/:year', auth,  dayCtrl.getADay);
router.get('/allDays/:email', auth,  dayCtrl.getAll);
router.put('/addFood/:name/:quantity/:quantityProtein', auth, dayCtrl.addFood);
router.delete('/delete/:dayId',auth, dayCtrl.deleteDay)
router.put('/removeFood/', auth, dayCtrl.removeFood)

module.exports = router