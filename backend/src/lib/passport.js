//Con passport puedo hacer la autenticación de manera local o a traves de redes sociales como facebook, gmail, twitter, etc.
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../database");
const helpers = require("../lib/helpers");

//Configuración de passport al iniciar sesion
passport.use(
    "local.signin",
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            const rows = await pool.query(`SELECT * FROM usuario WHERE email_usuario = ?`, [email]);
            if (!rows.length > 0) return done("Ese correo no está registrado", false, { message: "Ese correo no está registrado" }); //El usuario no existe

            const validPassword = await helpers.matchPassword(password, rows[0].password); //<- Verificando la contraseña
            delete rows[0].password;
            rows[0].authenticate = true;
            if (!validPassword) return done("Contraseña inválidos", false, { message: "Contraseña inválidos" });
            if (rows[0].estado_usuario == 0) return done("Usuario inhabilitado", false, { message: "Usuario inhabilitado" }); //El usuario está inhabilitado
            return done(null, rows[0]); //<- Contraseña correcta
        }
    )
);

//Guardar al usuario dentro de la sessión
passport.serializeUser((user, done) => {
    done(null, user);
});

//Descierializarlo de la sessión
//Tomar el id del usuario para volver a obtener los datos
passport.deserializeUser(async (user, done) => {
    done(null, user);
});

module.exports = passport;
