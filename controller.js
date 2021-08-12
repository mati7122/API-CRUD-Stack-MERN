const validator = require('validator');
const User = require('./model');

const controller = {

    test: (req, res) => {
        res.status(200).send({
            message: 'Test Succes'
        })
    },

    save: (req, res) => {

        let params = req.body;

        try {
            validate_name = !validator.isEmpty(params.name);
            validate_email = !validator.isEmpty(params.email);
            validate_number = !validator.isEmpty(params.number);
            validate_number_numeric = validator.isNumeric(params.number);
            validate_location = !validator.isEmpty(params.location);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            })
        }

        if (validate_name && validate_email && validate_number && validate_location && validate_number_numeric) {
            var userNew = new User();

            userNew.name = params.name;
            userNew.email = params.email;
            userNew.number = params.number;
            userNew.location = params.location;

            userNew.save()
                .catch(error => {
                    res.status(500).send({
                        message: 'Error al guardar los datos'
                    });
                })
                .then(succes => {
                    res.status(200).send({
                        message: 'Datos guardados correctamente',
                        succes
                    })
                })
        }

        else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            })
        }



    },

    delete: (req, res) => {

        let id = req.params.id;

        User.deleteOne({ _id: id })
            .catch(error => {
                res.status(500).send({
                    message: 'Error, el dato no pudo ser eliminado'
                })
            })
            .then(succes => {
                res.status(200).send({
                    message: 'Dato eliminado con éxito'
                })
            })
    },

    update: (req, res) => {

        let id = req.params.id;

        let params = req.body;

        User.updateOne({ _id: id }, params)
            .catch(error => {
                res.status(500).send({
                    message: 'No fue posible actualizar los datos'
                });
            })
            .then(succes => {
                res.status(200).send({
                    message: 'Los datos han sido guardados con éxito'
                })
            })
    },

    getData: (req, res) => {
        User.find({})
            .then(succes => {
                res.status(200).send({
                    message: 'succes',
                    succes
                })
            })
    },

    getOne: (req, res) => {

        let id = req.params.id;

        User.findById(id)
            .then(item => {
                res.status(200).send({
                    message: 'succes',
                    item
                })
            })
    }
}

module.exports = controller;