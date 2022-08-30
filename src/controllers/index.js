function index (req, res) {
    res.render('index', {
        tittle: 'Pagina Inicial'
    })
}

module.exports = {
    index,
}