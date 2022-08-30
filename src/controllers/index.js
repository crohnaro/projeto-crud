function index (req, res) {
    res.render('index', {
        tittle: 'Titulo Teste'
    })
}

module.exports = {
    index,
}