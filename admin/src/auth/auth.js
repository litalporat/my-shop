class Auth {
    constructor(){
        this.authenticated = false;
    }

    login(cb){
        this.authenticated=true;
        cb();
    }

    logout(cb){
        this.authenticated=false;
        localStorage.removeItem("key");
        cb();
    }

    isAuthenticated(){
        if (localStorage.getItem("key")) this.authenticated=true;
        return this.authenticated;
    }
}

export default new Auth()