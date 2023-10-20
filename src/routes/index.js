const crudRouter = require('./CRUD')

function route(app) {

     app.use('/crud', crudRouter)

     app.get('/', (req, res) => {
          res.render('home')
     })

}

module.exports = route