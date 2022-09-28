var express = require('express');
var router = express.Router();

const controller = require('../controllers/users')

/* GET users listing. */
router.get('/:n1/:n2', controller.sumar);

router.post('/', controller.multiplicar);

router.put('/', controller.dividir);

router.patch('/', controller.potencia);

router.delete('/:n1/:n2', controller.restar);

module.exports = router;
