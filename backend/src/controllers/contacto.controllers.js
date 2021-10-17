const controller_contacto = {};
const pool = require("../database");

//get("/")
controller_contacto.getAllMessage = async (req, res) => { }

//post("/")
controller_contacto.sendMessage = async (req, res) => {
    try {
        const result = await pool.query("INSERT INTO contactanos SET ? ", [req.body]);
        if (result.affectedRows === 1) return res.json({ success: "Mensaje enviado" });
        return res.json({ error: "Ocurrio un error" });
    } catch (error) {
        //console.log(error);
        return res.json({ error: "Ocurrio un error" });
    }
}

module.exports = controller_contacto;