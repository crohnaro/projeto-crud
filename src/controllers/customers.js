const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

function index(req, res) {
    res.render('register', {
        tittle: 'Register'
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
    res.send('cadastro realizado')
}

function listUsers (req, res) {
    res.render('listUsers', {
        tittle: 'Listagem de Users',
        users: []
    })
}

module.exports = {
    index,
    add,
    listUsers,
}