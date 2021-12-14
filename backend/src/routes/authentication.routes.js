const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/signin", (req, res, next) => {
  passport.authenticate("local.signin", function (err, user, info) {
    if (err) return res.json({ error: err });

    if (!user) return res.redirect("/failedLogin");

    req.logIn(user, function (err) {
      if (err) return res.json(err);
      return res.json({ success: "Sesión Iniciada", user: user });
    });
  })(req, res, next);
});

//Registrarse
router.post("/signup", async (req, res, next) => {
  passport.authenticate("local.signup", function (err, user, info) {
    if (err) return res.json({ error: err });

    if (!user) {
      return res.json({ error: "El correo ya está en uso!" });
    }

    req.logIn(user, function (err) {
      if (err) return res.json(err);
      return res.json({ success: "Sesión Iniciada", user: user });
    });
  })(req, res, next);
});

router.get("/failedLogin", async (req, res) => {
  return res.json({ error: "Contraseña o Correo inválidos" }); //No autentificado
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.json({ success: "Desconectado" });
});

module.exports = router;
