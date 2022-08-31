const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTittle = 'Cadastro de Clientes'

function index(req, res) {
    res.render('register', {
        tittle: defaultTittle
    })
}   

async function add(req, res){
    const {
        name,
        age,
        email,
        password, 
    } = req.body
    
    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    }) 
    register.save()
    res.render('register', {
        tittle: defaultTittle,
        message: 'Cadastro realizado com sucesso'
    })
}

async function listUsers (req, res) {

   const users = await CustomersModel.find()

    res.render('listUsers', {
        tittle: 'Listagem de Users',
        users,
    })
}

async function indexEdit (req, res) {
    const { id } = req.query

    const user = await CustomersModel.findById(id)
    
    res.render('edit', {
        tittle: 'Editar Cliente',
        user,
    })
}

module.exports = {
    index,
    add,
    listUsers,
    indexEdit,
}