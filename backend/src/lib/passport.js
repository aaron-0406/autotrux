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
      //$2a$10$5rHZzRb/7UvCwDPBu0AJheC2u4K8IsW.XBjktNRiAx/JGZ6Iq6lPi
      const rows = await pool.query(`SELECT * FROM usuario WHERE email = ?`, [
        email,
      ]);
      if (!rows.length > 0)
        return done("Ese correo no está registrado", false, {
          message: "Ese correo no está registrado",
        }); //El usuario no existe

      const validPassword = await helpers.matchPassword(
        password,
        rows[0].password
      ); //<- Verificando la contraseña
      delete rows[0].password;
      if (!validPassword)
        return done("Contraseña inválidos", false, {
          message: "Contraseña inválidos",
        });
      if (rows[0].estado == 0)
        return done("Usuario inhabilitado", false, {
          message: "Usuario inhabilitado",
        }); //El usuario está inhabilitado
      return done(null, rows[0]); //<- Contraseña correcta
    }
  )
);

//Configuración de passport al registrarse
passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, user, pass, done) => {
      try {
        const { dni, nombres, apellidos, telefono, email, password } = req.body;
        const newUser = {
          dni: dni,
          nombres: nombres,
          apellidos: apellidos,
          telefono: telefono,
          estado_usuario: "ACTIVO",
          rol: "CLIENTE",
          email: email,
          password: password,
        };
        newUser.password = await helpers.encryptPassword(newUser.password); //<- Encripta la contraseña
        const data = await pool.query("INSERT INTO usuario set ?", [newUser]);
        delete newUser.password;
        newUser.id_usuario = data.insertId;
        return done(null, newUser);
      } catch (error) {
        return done(null, false, { error: "El correo ya está en uso" });
      }
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
