const router = require('express').Router();
const apiRouteruser = require('./api/users.js');
const apiRouterCategoria = require('./api/categorias.js');
const apiRouterArticulo = require('./api/articulos.js');

router.use('/usuario', apiRouteruser); //.com/api/usuario
router.use('/categoria', apiRouterCategoria);//.com/api/categoria
router.use('/articulo', apiRouterArticulo);//.com/api/articulo


module.exports = router;