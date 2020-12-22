const router = require('express').Router();
const userController = require('../../controllers/UserControllers.js');
const auth = require('../../middlewares/auth')

router.post('/login', userController.login);
router.get('/list', userController.listar);
router.post('/add', userController.add);
router.put('/update',userController.update);
router.put('/activate', userController.activate);
router.put('/deactivate', userController.deactivate);


module.exports = router;