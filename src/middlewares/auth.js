const jwt = require('jsonwebtoken');

//req = request JSON {} URL ?param1=valor
//res = response Respuesta de nuestro aplicativo
//next Pasa a la siguiente capa de funcionalidad

module.exports = (req,res,next) => {
    const token=req.header('Authorization');

    if(!token){
        return res.status(401).json({msg:'no hay token,permiso denegado'});
    }

    try {
        const cifrado = jwt.verify(token,process.env.JWT_SECRET);
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        res.status(401).json({msg:'Token no valido'})
    }
}