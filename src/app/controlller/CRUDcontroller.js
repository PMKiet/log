class CRUDcontroller {
     index(req, res) {
          res.render('crud')
     }
}

module.exports = new CRUDcontroller

// const crudCOntroller = require('./CRUDcontroller')