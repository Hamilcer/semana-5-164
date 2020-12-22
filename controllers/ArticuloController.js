
const db = require ('../models');

exports.add = async(req, res, next) =>{
    try {
        const registro = await db.Articulo.create(req.body);
        res.status(200).json(registro);

    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error);
    }
};

exports.list = async(req, res, next)=>{
    try {
        const registro = await db.Articulo.findAll({
            include: {
                model : db.Categoria,
                required: true,
                as: 'categoria',
                // atributes : [nombre]

            }
        });
        if(registro){
            res.status(200).json(registro);
        }else{
            res.status(404).send({
                message: 'No hay categorias en el sistema'
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message: 'Error!!'
        })
        next(error);
        
    }
};

exports.update = async(req, res, next) =>{
    try {
        const registro = await db.Articulo.update({categoriaId: req.body.categoria, nombre: req.body.nombre, descripcion: req.body.descripcion, codigo: req.body.codigo},
            {
                where: {
                    id: req.body.id
                },
            });
            res.status(200).json(registro);
        
    } catch (error) {
        res.status(500).send({
            message: 'Error.'
        });
        next(error);
    }
};

exports.activate = async(req, res, next) =>{
    try {
        const registro = await db.Articulo.update({estado: 1},
            {
                where: {
                    id: req.body.id
                },
            });
            res.status(200).json(registro);
        
    } catch (error) {
        res.status(500).send({
            message: 'Error.'
        });
        next(error);
    }
};

exports.deactivate = async(req, res, next) =>{
    try {
        const registro = await db.Articulo.update({estado: 0},
            {
                where: {
                    id: req.body.id
                },
            });
            res.status(200).json(registro);
        
    } catch (error) {
        res.status(500).send({
            message: 'Error.'
        });
        next(error);
    }
};
