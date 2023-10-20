const express = require('express')
const router = express.Router()

const crudController = require('../app/controlller/CRUDcontroller')

router.use('/', crudController.index)

module.exports = router
