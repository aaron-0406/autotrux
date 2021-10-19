interface Auth {
    loged: boolean;
    rango?: string;
}
class Auth {
    constructor() {
        this.loged = false;
        this.rango = "2";
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
        return this.rango;
    }
    setRango(rango: string | undefined) {
        this.rango = rango;
        //rango=1 -> administrador
    }
}

export default new Auth();
