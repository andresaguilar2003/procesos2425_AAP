function Sistema() {
    this.usuarios = {}; // Cambia el array [] a un objeto {}

    this.agregarUsuario = function(nick) {
        let res = { "nick": -1 };
        if (!this.usuarios[nick]) {
            this.usuarios[nick] = new Usuario(nick);
            res.nick = nick;
        } else {
            console.log("el nick " + nick + " está en uso");
        if (!this.usuarios[nick]) { 
            this.usuarios[nick] = new Usuario(nick); 
            res.nick = nick; 
        } else { 
            console.log("el nick " + nick + " está en uso");            
        }
        return res; 
        };
    }

    this.eliminarUsuario = function(nick) {
        let res = false;
        if (this.usuarios[nick]) {
            delete this.usuarios[nick];
            res = true;
        }
        return res;
    };
    this.eliminarUsuario = function(nick) {
        let res = false;
        if (this.usuarios[nick]) {
            delete this.usuarios[nick];
            res = true;
        }
        return res;
    };
    this.obtenerUsuarios = function() {
        return this.usuarios;
    };

    this.usuarioActivo = function(nick) {
        return !!this.usuarios[nick];
    };

    this.numeroUsuarios = function() {
        return Object.keys(this.usuarios).length;
    };
}

function Usuario(nick) {
    this.nick = nick;
}

module.exports.Sistema = Sistema;
