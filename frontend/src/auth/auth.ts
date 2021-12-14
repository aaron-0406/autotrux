interface Auth {
  loged: boolean;
  rol?: string;
}
class Auth {
  constructor() {
    this.loged = false;
    this.rol = "CLIENTE";
  }
  sigIn() {
    this.loged = true;
  }
  logOut() {
    this.loged = false;
  }
  isAuth() {
    return this.loged;
  }
  getRango() {
    return this.rol;
  }
  setRango(rol: string | undefined) {
    this.rol = rol;
    //rango=1 -> ADMINISTRADOR
  }
}

export default new Auth();
