const controller_usuario = {};

//get("/whoami")
controller_usuario.whoami = async (req, res) => {
    if (!req.user) return res.json({ error: "No autentificado" }); //No autentificado
    return res.json({ user: req.user });
};

module.exports = controller_usuario;