const bcrypt = require('bcryptjs');
const db = require('../models');
const tokenServices = require('../services/token');

exports.login = async(req,res,next)=>{
    try{
        const Usuario = await db.Usuario.findOne({where: {email: req.body.email}});
        if(Usuario){
            const passwordIsValid = bcrypt.compareSync(req.body.password, Usuario.password);
            if(passwordIsValid){
                const token = await tokenServices.encode(Usuario);
                res.status(200).send({
                    //auth: true,
                    tokenReturn : token
                    //user : Usuario
                    
                })

            }else {           
                //error en la autenticación
                res.status(401).json({
                    error: 'Error en el ususario o contraseña'
                })
            }
        }else{
            //error en la autenticación
            res.status(404).json({
                error: 'Error en el ususario o contraseña'
            })
        }
    }catch(error){
        res.status(500).send({
            message: 'Error ->' + error
        })
        next(error);
    }
};

exports.add = async(req,res,next)=>{
    try{
        const Usuario = await db.Usuario.findOne({where: {email: req.body.email}});
        if(Usuario){
            res.status(409).send({
                message: 'Sorry your request has a conflict with our system state, maybe the email is already in use.'
            })
        }
        else{
            req.body.password =  bcrypt.hashSync(req.body.password,10);
            const Usuario = await db.Usuario.create(req.body);
            res.status(200).json(Usuario);
        }

    }catch(error){
        res.status(500).send({
            message: 'Error->'
        })
        next(error);
    }
};

exports.listar = async(req,res,next)=>{
    try{
        const user = await db.Usuario.findAll();
        if(user){
            res.status(200).json(user);
        }
        else{
            res.status(404).send({
                message: 'There is not user in the system'
            })
        }
    }catch(error){
        res.status(500).send({
            message: 'Error!!'
        })
        next(error);
    }
};

exports.update = async(req, res, next) =>{
    try {
        const registro = await db.Usuario.update({nombre: req.body.nombre, password: req.body.password, email: req.body.email, rol: req.body.rol},
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
        const registro = await db.Usuario.update({estado: 1},
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
        const registro = await db.Usuario.update({estado: 0},
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



