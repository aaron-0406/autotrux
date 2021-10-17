const bcrypt = require("bcryptjs");

const helpers = {};

helpers.encryptPassword = async (password) => {
    //Ejecutar el algoritmo 10 veces
    //Generar un patrón
    //genSaltSync => genera patron con valores en cadena
    //genSalt => genera patron con valores en cadena y numeros
    const salt = await bcrypt.genSaltSync(10);
    //Cifrar contraseña de acuerdo al patrón
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

//Método para logear
helpers.matchPassword = async (password, savedPassword) => {
    try {
        return await bcrypt.compare(password, savedPassword);
    } catch (e) { }
};

module.exports = helpers;
