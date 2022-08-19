const express = require('express');
const router = express.Router();

const afilCtrl = require('../controllers/afiliado.controller');

router.get('/', afilCtrl.getAfiliados);
router.post('/', afilCtrl.createAfiliado);
router.get('/:id', afilCtrl.getAfiliado);
router.put('/:id', afilCtrl.editAfiliado);
router.delete('/:id', afilCtrl.deleteAfiliado);

module.exports = router;