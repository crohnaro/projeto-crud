const router = require('express').Router()

//rotas
router.get('/', (req, res) =>{
    res.render('index', {
        tittle: 'Titulo Teste'
    })
})

module.exports = router