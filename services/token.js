const jwt = require('jsonwebtoken');
const db = require('../models');

const checkToken = async(token) =>{
    let localID = null;
    try {
        const id = await token.decode(token);
        localID = id;
    } catch (error) {
        return false;
    }

    const Usuario = await db.Usuario.findOne({where:{
        id : localID,
        estado : 1
    }});
    
    if(Usuario){
        const token = encode(Usuario);
        return token;
    }else{
        return false;
    }
}

module.exports = {
    encode: async(Usuario) =>{
        const token = jwt.sign({
            id: Usuario.id,
            nombre: Usuario.nombre,
            email: Usuario.email,
            rol : Usuario.rol,
            
        }, 'UnaFraseSecretaParaCodificar',{
            expiresIn: 86400,
        });

        return token;
    },

    decode: async(token) =>{
        try{
            const { id } = await jwt.verify(token,'UnaFraseSecretaParaCodificar');
            const user = await db.Usuario.findOne({where: {
                id : id,
                estado : 1
            }});
            if(user){
                return user;
            }else{
                return false;
            }
        }catch(error){
            const newToken = await checkToken(token);
            return newToken;
        }
    }
}