const Afiliado = require ('../models/afiliado');
const afiliado = require('../models/afiliado');

const afiliadoCtrl = {};

afiliadoCtrl.getAfiliados = async (req, res) => {
    const afiliados = await Afiliado.find();
    res.json(afiliados);
};

afiliadoCtrl.createAfiliado = async (req, res) => {
    const afiliado = new Afiliado(req.body);
    await afiliado.save();
    res.json({
        'status': 'Afiliado creado'
    });
};

afiliadoCtrl.getAfiliado = async (req, res) => {
    const afiliado = await Afiliado.findById(req.params.id);
    res.json(afiliado);
};

afiliadoCtrl.editAfiliado = async (req, res) => {
    const modAfiliado = new Afiliado(req.body);
    await Afiliado.findByIdAndUpdate(req.params.id, {$set: modAfiliado}, {new: true});
    res.json({
        'status':'Afiliado actualizado'
    });
};

afiliadoCtrl.deleteAfiliado = async (req, res) => {
    await Afiliado.findByIdAndRemove(req.params.id);
    res.json({
        'status':'Afiliado eliminado'
    });
};

module.exports = afiliadoCtrl;