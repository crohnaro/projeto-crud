const router = require('express').Router()
const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

//rotas
router.get('/', IndexController.index)

//Registro
router.get('/register',CustomersController.index)
router.post('/register/add',CustomersController.add)


//Listar
router.get('/list', CustomersController.listUsers)

//editar
router.get('/edit', CustomersController.indexEdit)
//router.post('/edit', CustomersController.edit)

module.exports = router